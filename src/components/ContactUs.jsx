import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactUs(props) {
  return (
    <React.Fragment>
      <h1>Contact Us</h1>
      <Form>
        <Form.Group controlId="formGroupFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" />
        </Form.Group>
        <Form.Group controlId="formGroupLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder="Enter message" />
        </Form.Group>
        <Button type="submit" size="md">
          Send
        </Button>
      </Form>
    </React.Fragment>
  );
}

export default ContactUs;
