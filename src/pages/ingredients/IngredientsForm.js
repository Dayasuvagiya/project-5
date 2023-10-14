import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";


  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Ingredient Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          name="quantity"
        />
      </Form.Group>


      <Button type="submit">
        Add item
      </Button>
      <Button
      >
        Cancel
      </Button>
    </div>
  );

  return (
    <Container className={`d-flex align-items-center justify-content-center ${appStyles.Content}`}>
      <Form>
        {textFields}
      </Form>
    </Container>
  );


export default ListCreateForm;