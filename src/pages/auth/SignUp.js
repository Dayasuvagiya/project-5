import React, {useState} from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/SignUp.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import axios from "axios";

import { Form, Button, Image, Col, Row, Container, Alert, } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const SignUp = () => {

  const [signUpData, setSignUpData] = useState({
      username: "",
      password1: "",
      password2: "",
    });
    const { username, password1, password2 } = signUpData;
    const [errors, setError] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    }); 
  };
 
  const handleSubmit = async(event) => {
    console.log({ signUpData });
    event.preventDefault();
   try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err){
      setError(err.response?.data)
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

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
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control 
                type="password" 
                name="password1" 
                placeholder="Password" 
                className={styles.UserInput}
                value={password1}
                onChange={handleChange}
                />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm Password</Form.Label>
              <Form.Control 
                type="password" 
                name="password2" 
                placeholder="Confirm Password"
                className={styles.UserInput}
                value={password2}
                onChange={handleChange}
                />
            </Form.Group>
            {errors.password2?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Button 
              type="submit"
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.ButtonColor}`}
              >
                Sign Up
            </Button>

            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}

          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.SignupImage}`}
          src={"https://imagizer.imageshack.com/img924/3818/u13PUz.jpg"}
        />
      </Col>
    </Row>
  );
};

export default SignUp;
