import { Link } from "react-router-dom";
import "./NotFound.scss";

export const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <div className="min-h-screen hero ">
          <div className="text-center hero-content">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Opps 404!</h1>
              <p className="py-6 text-3xl">
                Sorry ! The page You are Looking for Does Not Exist!
              </p>
              <button className="btn btn-primary">
                <Link to="/">Go Back</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
