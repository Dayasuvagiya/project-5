import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import {Switch, Route} from 'react-router-dom';
import "./api/axiosDefaults";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import ListsPage from "./pages/ingredients/ListPage";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import NotFound from "./components/NotFound";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import ListRecipePage from "./pages/recipes/ListRecipePage";
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Conta}>
             <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <PostsPage message="No results found. Adjust the search keyword." />
                )}
              />
              <Route
                exact
                path="/feed"
                render={() => (
                  <PostsPage
                    message="No results found. Adjust the search keyword or follow a user."
                    filter={`owner__followed__owner__profile=${profile_id}&`}
                  />
                )}
              />
              <Route
                exact
                path="/liked"
                render={() => (
                  <PostsPage
                    message="No results found. Adjust the search keyword or like a post."
                    filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
                  />
                )}
              />              
              <Route exact path="/signin" render={() => <SignIn />} />
              <Route exact path="/signup" render={() => <SignUp />} />
              <Route
                exact
                path="/items"
                render={() =>
                  <ListsPage
                  message="No results found. Adjust the search keyword or add an ingredients."
                  filter={currentUser}
                  />
                }
                />
                <Route
                exact
                path="/recipes"
                render={() =>
                  <ListRecipePage
                  message="No results found. Adjust the search keyword or add recipe"
                  filter={currentUser}
                  />
                }
              />
              <Route exact path="/posts/create" render={() => <PostCreateForm />} />
              <Route exact path="/posts/:id" render={() => <PostPage />} />
              <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
              <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
              <Route
                exact
                path="/profiles/:id/edit/username"
                render={() => <UsernameForm />}
              />
              <Route
                exact
                path="/profiles/:id/edit/password"
                render={() => <UserPasswordForm />}
              />
              <Route
                exact
                path="/profiles/:id/edit"
                render={() => <ProfileEditForm />}
              />
              <Route render={() => <NotFound />} />
            </Switch>
          </Container>
          <NotificationContainer />
        </div>
  );
}

export default App;
