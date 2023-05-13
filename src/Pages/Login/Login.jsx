import React, { useContext } from "react";
import loginPic from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((erorr) => {
        console.log(erorr.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <div className="text-center w-full lg:text-left">
          <img className="w-full " src={loginPic} alt="" />
        </div>
        <div className="card  w-full shadow-2xl bg-base-100">
          <h1 className="text-3xl font-bold text-center mt-10">Login</h1>
          <div className="card-body">
            <form onSubmit={handleSignin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-rose-500"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p>
              New to Car Doctors{" "}
              <Link className="text-rose-500 font-bold" to="/signup">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
