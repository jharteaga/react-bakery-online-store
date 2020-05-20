import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import firebase from '../firebase';
import jwt from 'jwt-simple';

function Login(props) {
  const { register, handleSubmit, errors, getValues } = useForm();
  const [errorLogin, setErrorLogin] = useState(undefined);

  const onSubmit = () => {
    //Call Firebase to validate user
    firebase
      .firestore()
      .collection('users')
      .where('username', '==', getValues('email'))
      .where('password', '==', getValues('password'))
      .get()
      .then((querySnapshot) => {
        const user = querySnapshot.docs[0].data();
        setErrorLogin(undefined);
        setCurrentUser(user);
        window.location = '/react-bakery-online-store/';
      })
      .catch((error) => {
        setErrorLogin({ message: 'Invalid Credentials' });
      });
  };

  const setCurrentUser = (user) => {
    const jwtUser = jwt.encode(user, 'secret');
    localStorage.setItem('currentUser', jwtUser);
  };

  useEffect(() => {}, [errorLogin]);

  if (JSON.parse(localStorage.getItem('currentUser')))
    return <Redirect to="/" />;

  return (
    <React.Fragment>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <div className="alert alert-danger">
              Please, enter a valid email
            </div>
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
              Password should have at least 8 characters
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
      <br />

      {errorLogin && (
        <div className="alert alert-danger">{errorLogin.message}</div>
      )}
    </React.Fragment>
  );
}

export default Login;
