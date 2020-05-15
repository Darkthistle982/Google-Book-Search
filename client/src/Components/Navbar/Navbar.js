import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <span className="navbar-brand mb-0 h1">Google Books</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        ></button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a href="/" className="nav-item btn btn-outline-light mb-0 mr-3">
                <Link to="/">
                  Search <span className="sr-only">(current)</span>
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/Saved"
                className="nav-item btn btn-outline-light mb-0 text-white"
              >
                <Link to="/saved">Saved</Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
