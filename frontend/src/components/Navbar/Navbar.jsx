/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ size }) => {
  return (
    <div className="navbar-menu">
      <div className="container">
        <div className="navbar bg-neutral text-neutral-content">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink className={"mobile-menu"} to={"/shop"}>
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink className={"mobile-menu"} to={"/about"}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className={"mobile-menu"} to={"/contact"}>
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink className={"mobile-menu"} to={"/login"}>
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink className={"mobile-menu"} to={"/register"}>
                    Register
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link to={"/"} className={"text-xl btn btn-ghost"}>
              E-Commerce
            </Link>
          </div>
          <div className="hidden navbar-center lg:flex">
            <ul className="px-1 menu menu-horizontal">
              <li>
                <NavLink to={"/shop"}>Shop</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <NavLink
              className={"btn btn-primary mr-3 lg:flex hidden"}
              to={"/login"}
            >
              Login
            </NavLink>
            <NavLink
              className={"btn btn-primary mr-3 lg:flex hidden"}
              to={"/register"}
            >
              Register
            </NavLink>
            <Link to={"/cart"}>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">{size}</span>
                </div>
              </div>
            </Link>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow profile-menu menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
