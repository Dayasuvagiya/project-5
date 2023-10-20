import React, {useState} from "react";
import { Link } from "react-router-dom";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import axios from "axios";
import styles from "../../styles/SigIn.module.css";
import { Form, Button, Col, Row, Container, Alert, } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/userRedirect";
import { setTokenTimestamp } from "../../utils/utils";


function SignIn() {
    const setCurrentUser = useSetCurrentUser();
    useRedirect ('loggedIn')

  const [signInData, setSignInData] = useState({
      username: "",
      password: "",
    });

  const { username, password } = signInData;
  const [errors, setError] = useState({});

  const history = useHistory();

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const {data} = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      setTokenTimestamp(data)
      history.goBack();
    } catch (err){
      setError(err.response?.data);
    }
  };

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    }); 
  };

  return (
    <Row className={styles.Row}>
      <Col className={styles.SigninMain} md={6} >
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign in</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control 
                type="text" 
                name="username" 
                placeholder="Username"
                className={styles.UserInput}
                value={username}
                onChange={handleChange}
                />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control 
                type="password" 
                name="password" 
                placeholder="Password" 
                className={styles.UserInput}
                value={password}
                onChange={handleChange}
                />
            </Form.Group>
            {errors.password?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Button 
              type="submit"
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.ButtonColor}`}
              >
                Sign In
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}

          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signup">
            Don't have an account?? <span>Sign Up</span>
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default SignIn;
