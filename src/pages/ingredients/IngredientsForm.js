import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";
import { NotificationManager} from 'react-notifications';


function ListCreateForm({ setItems }) {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    name: "",
    quantity: "",
  });

  const { name, quantity } = postData;

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCancel = () => {
    const confirmed = window.confirm("Empty form?");
    if (confirmed) {
      setPostData({ name: "", quantity: "" });
      setErrors({});
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("quantity", quantity);

    try {
      const { data } = await axiosReq.post("/items/", formData);
      const newItem = data ?? {};
      if(event) {
        NotificationManager.success('Successfully Added Ingredient');
      }
      setItems((prevItems) => [newItem, ...prevItems]);
      setPostData({ name: "", quantity: "" });
      setErrors({});
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Ingredients</Form.Label>
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
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          name="quantity"
          value={quantity}
          onChange={handleChange}
          className="form-control-sm"
          min={1}
        />
      </Form.Group>
      {errors?.quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}


      <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.ButtonColor} ${btnStyles.ButtonSpace}`} type="submit">
        Add Ingredients
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

export default ListCreateForm;