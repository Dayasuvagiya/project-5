import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import {Switch,Route} from 'react-router-dom';
import "./api/axiosDefault";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentuser] = useState(null);

  const handleMount = async () => {
    try {
      const { data } = await axios.get('dj-rest-auth/user/');
      setCurrentuser(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentuser}> {/* Updated variable name */}
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Conta}>
            <Switch>
              <Route exact path="/" render={() => <h1>Home page</h1>} />
              <Route exact path="/aboutus" render={() => <h1>About Us</h1>} />
              <Route exact path="/signin" render={() => <SignIn />} />
              <Route exact path="/signup" render={() => <SignUp />} />
              <Route render={() => <p>Page not found!</p>} />
            </Switch>
          </Container>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
