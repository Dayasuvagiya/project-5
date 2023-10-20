import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";

function RecipesForm({ data, setRecipes }) {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({ name: '', content: '' });

  useEffect(() => {
    if (data) {
      setPostData({ ...data });
    }
  }, [data]);
  console.log({ data, postData })
  const { name = '', content = '' } = postData;
  console.log({ name, content })
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCancel = () => {
    const confirmed = window.confirm("Empty form?");
    if (confirmed) {
      setPostData({ name: "", content: "" });
      setErrors({});
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("content", content); 

    try {
      if(postData.id) {
        console.log({ formData })
      const { data } = await axiosReq.put(`/recipes/${postData.id}/`, postData);
      if(data) {
        console.log(data);
        setRecipes(prevRecipes => {
          const updatedRecipes = prevRecipes.map(recipe => {
            if (recipe.id === data.id) {
              return data;
            }
            return recipe;
          });
          return updatedRecipes;
        });
        
      }
      setPostData({ name: "", content: "" });
      setErrors({});
      } else {
        console.log({ formData })
        const { data } = await axiosReq.post("/recipes/", formData);
        const newRecipe = data ?? {};
        setRecipes((prevRecipes) => [newRecipe, ...prevRecipes]);
        setPostData({ name: "", content: "" });
        setErrors({});
      }
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
        console.log(err.response.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Recipe Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className="form-control-sm"
        />
      </Form.Group>
      {errors?.name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Add your recipe here</Form.Label>
        <Form.Control
          className="form-control-sm"
          as="textarea"
          rows={6}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.recipe?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}


      <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.ButtonColor} ${btnStyles.ButtonSpace}`} type="submit">
        Add Recipe
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.ButtonColor} ${btnStyles.ButtonSpace}`}
        onClick={handleCancel}
      >
        Cancel
      </Button>
    </div>
  );

  return (
    <Container className={`d-flex align-items-center justify-content-center ${appStyles.Content}`}>
      <Form onSubmit={handleSubmit} className="w-100">
        {textFields}
      </Form>
    </Container>
  );
}

export default RecipesForm;