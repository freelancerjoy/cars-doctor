import React, { useContext } from "react";
import signupPic from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Signup = () => {
  const { signUp, profileUpdate } = useContext(AuthContext);
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    signUp(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        profileUpdate(user.currentUser, name).then((result) => {
          console.log(result);
        });
      })
      .catch((erorr) => {
        console.log(erorr.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <div className="text-center w-full lg:text-left">
          <img className="w-full " src={signupPic} alt="" />
        </div>
        <div className="card  w-full shadow-2xl bg-base-100">
          <h1 className="text-3xl font-bold text-center mt-10">Sign up</h1>
          <div className="card-body">
            <form onSubmit={handleSignup}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="text"
                  className="input input-bordered"
                />
              </div>
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
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  name="password"
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-rose-500"
                  type="submit"
                  value="Sign up"
                />
              </div>
            </form>
            <p>
              Already have an account ?
              <Link className="text-rose-500 font-bold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
