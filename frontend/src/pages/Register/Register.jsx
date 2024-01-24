import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="container">
        <div className="flex items-center justify-center my-5 h-[80vh]">
          <div className="shadow-xl card w-96 bg-base-100">
            <div className="card-body">
              <h1 className="justify-center mb-4 text-3xl card-title">
                Register
              </h1>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full max-w-xs input input-bordered"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full max-w-xs input input-bordered"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full max-w-xs input input-bordered"
                  />
                </div>
              </form>
              <div className="justify-center card-actions">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
              <div>
                <p>
                  Already have an account?{" "}
                  <span className="text-primary">
                    <Link to={"/login"}>Login</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
