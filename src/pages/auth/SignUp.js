import React, {useState} from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/SignUp.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUp = () => {

  const [signUpData, setSignUpData] = useState({
    username: '',
    password: '',
    password2: ''
  })
  const { username, passsword, password2 } = signUpData;

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    }); 
  };
 
  const handleSubmit = async(event) => {
    event.preventData();
    try {
        await axios.post('/dj-rest-auth/registration/', signUpData)
    }catch(err){
  }

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

          <Form>
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

            <Form.Group controlId="password">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control 
                type="password" 
                name="password" 
                placeholder="Password" 
                className={styles.UserInput}
                value={passsword}
                onChange={handleChange}
                />
            </Form.Group>

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

            <Button 
              type="submit"
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.ButtonColor}`}
              >
              Submit
            </Button>
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
