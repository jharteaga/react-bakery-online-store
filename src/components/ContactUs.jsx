import React, { useState } from 'react';
import Joi from '@hapi/joi';

function ContactUs(props) {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const schema = {
    firstName: Joi.string().min(1).required().label('First Name'),
    lastName: Joi.string().min(1).required().label('Last Name'),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label('Email'),
    message: Joi.string().min(1).required().label('Message'),
  };

  return (
    <React.Fragment>
      <h1>Contact Us</h1>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Enter first name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Enter last name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            placeholder="Enter message"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </React.Fragment>
  );
}

export default ContactUs;
