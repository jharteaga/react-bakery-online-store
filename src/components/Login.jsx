import React from 'react';
import { useForm } from 'react-hook-form';

function Login(props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = () => {
    //Call Firebase to validate user
    console.log('Login');
  };

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
    </React.Fragment>
  );
}

export default Login;
