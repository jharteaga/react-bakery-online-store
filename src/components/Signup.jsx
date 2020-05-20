import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import jwt from 'jwt-simple';
import firebase from '../firebase';

function Signup(props) {
  const { register, handleSubmit, errors, getValues } = useForm();
  const [errorSignUp, setErrorSignUp] = useState(undefined);

  const onSubmit = async () => {
    //Validate if new user exist
    firebase
      .firestore()
      .collection('users')
      .where('username', '==', getValues('email'))
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.docs[0].data())
          setErrorSignUp({
            message: 'This email address is already registered.',
          });
      })
      .catch((error) => {
        registerNewUser();
      });
  };

  const registerNewUser = async () => {
    //Save new user in firebase
    const user = {
      firstName: getValues('firstName'),
      lastName: getValues('lastName'),
      username: getValues('email'),
      password: getValues('password'),
    };

    try {
      await firebase
        .firestore()
        .collection('users')
        .add({
          firstName: getValues('firstName'),
          lastName: getValues('lastName'),
          username: getValues('email'),
          password: getValues('password'),
        });

      localStorage.setItem('currentUser', jwt.encode(user, 'secret'));

      window.location = '/';
    } catch (error) {
      setErrorSignUp({
        message:
          'There is a problem accessing the data. Try again in a few moment 2',
      });
    }
  };

  return (
    <React.Fragment>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            ref={register({ required: true, minLength: 1 })}
          />
          {errors.firstName?.type === 'required' && (
            <div className="alert alert-danger">This field is required</div>
          )}
          {errors.firstName?.type === 'minLength' && (
            <div className="alert alert-danger">
              First Name should have at least 1 character
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            ref={register({ required: true, minLength: 1 })}
          />
          {errors.lastName?.type === 'required' && (
            <div className="alert alert-danger">This field is required</div>
          )}
          {errors.lastName?.type === 'minLength' && (
            <div className="alert alert-danger">
              Last Name should have at least 1 character
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            ref={register({
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email?.type === 'required' && (
            <div className="alert alert-danger">This field is required</div>
          )}
          {errors.email?.type === 'pattern' && (
            <div className="alert alert-danger">Enter a valid email</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            ref={register({ required: true, minLength: 6 })}
          />
          {errors.password?.type === 'required' && (
            <div className="alert alert-danger">This field is required</div>
          )}
          {errors.password?.type === 'minLength' && (
            <div className="alert alert-danger">
              Password should have at least 6 characters
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      <br />

      {errorSignUp && (
        <div className="alert alert-danger">{errorSignUp.message}</div>
      )}
    </React.Fragment>
  );
}

export default Signup;
