import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useLocation } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import NoResults from "../../assets/no-results.png";
import styles from "../../styles/ListsPage.module.css";
import ListCreateForm from "./RecipesForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { MoreDropdown } from "../../components/MoreDropdown";
import btnStyles from "../../styles/Button.module.css";

function ListRecipePage({ message, filter = "" }) {
  const currentUser = useCurrentUser();
  const [recipes, setRecipes] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");
  const [editingRecipeId, setEditingRecipeId] = useState(null);
  const [editingRecipeName, setEditingRecipeName] = useState("");
  const [editingRecipeContent, setEditingRecipeContent] = useState("");
  console.log({ filter })
  const handleEdit = (recipeId, recipeName, recipecontent) => {
    setEditingRecipeId(recipeId);
    setEditingRecipeName(recipeName);
    setEditingRecipeContent(recipecontent);
  };

  const handleCancelEdit = () => {
    setEditingRecipeId(null);
    setEditingRecipeName("");
    setEditingRecipeContent("");
  };

  const handleSaveEdit = async (recipeId) => {
    console.log(recipeId);
    try {
      await axiosReq.put(`/recipes/${recipeId}/`, {
        name: editingRecipeName,
        content: editingRecipeContent,
      });
      setRecipes((prevRecipes) =>
        prevRecipes.map((recipe) => {
          if (recipe.id === recipeId) {
            return {
              ...recipe,
              name: editingRecipeName,
              content: editingRecipeContent,
            };
          }
          return recipe;
        })
      );
      setEditingRecipeId(null);
      setEditingRecipeName("");
      setEditingRecipeContent("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (recipeId) => {
    const confirmed = window.confirm("Are you sure you want to delete this recipe?");
    if (confirmed) {
      try {
        await axiosReq.delete(`/recipes/${recipeId}/`);
        setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== recipeId));
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const { data } = await axiosReq.get(`/recipes/?${filter}&search=${query}`);
        const filteredLists = data.results.filter((recipe) =>
          recipe.name.toLowerCase().includes(query.toLowerCase())
        );
        setRecipes(filteredLists);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchLists();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8} xl={9}>
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search recipe"
          />
        </Form>

        <ListCreateForm setRecipes={setRecipes} />

        {hasLoaded ? (
          <>
            {recipes.length ? (
              <InfiniteScroll
                dataLength={recipes.length}
                next={() => fetchMoreData(recipes, setRecipes)}
                hasMore={!!recipes.next}
                loader={<Asset spinner />}
                scrollThreshold="100px"
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Recipe</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recipes.map((recipe) => (
                      <tr key={recipe.id}>
                        {editingRecipeId === recipe.id ? (
                          <>
                            <td>
                              <Form.Control
                                value={editingRecipeName}
                                onChange={(e) => setEditingRecipeName(e.target.value)}
                              />
                            </td>
                            <td>
                              <Form.Control
                                value={editingRecipeContent}
                                onChange={(e) => setEditingRecipeContent(e.target.value)}
                                type="number"
                              />
                            </td>
                            <td>
                              <button className={`${btnStyles.Button} ${btnStyles.Green}`} onClick={() => handleSaveEdit(recipe.id)}>
                                Update
                              </button>
                              <button className={`${btnStyles.Button} ${btnStyles.Green}`} onClick={handleCancelEdit}>Cancel</button>
                            </td>
                          </>
                        ) : (
                          <>
                            <td>{recipe.name}</td>
                            <td>{recipe.content}</td>
                            <td>
                              <MoreDropdown
                                handleEdit={() =>
                                  handleEdit(recipe.id, recipe.name, recipe.content)
                                }
                                handleDelete={() => handleDelete(recipe.id)}
                              />
                            </td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </InfiniteScroll>
            ) : (
              <Container>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container>
            <Asset spinner />
          </Container>
        )}
      </Col>
    </Row>
  );
}

export default ListRecipePage;
