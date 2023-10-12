import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import {Switch,Route} from 'react-router-dom';
import "./api/axiosDefault";
import SignUp from "./pages/auth/SignUp";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Conta}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/aboutus" render={() => <h1>About Us</h1>} />
          <Route exact path="/signin" render={() => <h1>Sign In</h1>} />
          <Route exact path="/signup" render={() => <SignUp />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
