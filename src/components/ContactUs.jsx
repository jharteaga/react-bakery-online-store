import React from 'react';
import { useForm } from 'react-hook-form';

function ContactUs(props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = () => {
    console.log('Submitted');
  };

  return (
    <React.Fragment>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            placeholder="Enter first name"
            ref={register({ required: true, minLength: 1 })}
          />
          {errors.firstName?.type === 'required' && (
            <div className="alert alert-danger">This field is required</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            placeholder="Enter last name"
            ref={register({ required: true, minLength: 1 })}
          />
          {errors.lastName?.type === 'required' && (
            <div className="alert alert-danger">This field is required</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter email"
            ref={register({
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email?.type === 'required' && (
            <div className="alert alert-danger">This field is required</div>
          )}
          {errors.email?.type === 'pattern' && (
            <div className="alert alert-danger">
              Please, enter a valid email
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="3"
            placeholder="Enter message"
            ref={register({ required: true, minLength: 1 })}
          ></textarea>
          {errors.message?.type === 'required' && (
            <div className="alert alert-danger">This field is required</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </React.Fragment>
  );
}

export default ContactUs;
