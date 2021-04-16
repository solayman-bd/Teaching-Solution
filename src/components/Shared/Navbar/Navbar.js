import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link class="nav-link ms-5 active" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link ms-5 active"
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link ms-5 active"
                aria-current="page"
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link ms-5 active"
                aria-current="page"
                to="/review"
              >
                Review
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link ms-5 active" aria-current="page" to="/blog">
                Blog
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link ms-5 active"
                aria-current="page"
                to="/login"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
