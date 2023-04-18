import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  //   console.log(location);
  const [error, setError] = useState('');
  const [passToggle, setPassToggle] = useState(true);
  const { userLogIn } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userLogIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <h3>{error}</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative flex items-center">
                <input
                  required
                  name="password"
                  type={passToggle ? `password` : `text`}
                  placeholder="password"
                  className=" input input-bordered w-full"
                />
                <span
                  onClick={() => setPassToggle(!passToggle)}
                  className="absolute right-2"
                >
                  {passToggle ? (
                    <EyeSlashIcon className="h-6 w-6 text-blue-500" />
                  ) : (
                    <EyeIcon className="h-6 w-6 text-blue-500" />
                  )}
                </span>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <div>
              <Link></Link>
              <h3>
                Don't have an Account?{' '}
                <Link className="underline" to="/sign-up">
                  Sign Up Now
                </Link>{' '}
              </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
