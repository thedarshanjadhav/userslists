/* eslint-disable */
// import Records from "./Data.json";
// import Users from "./components/Users";
import React, { useState } from "react";

function NavBar(props) {
  const [userInput, setUserInput] = useState("");
  const call = () => {
    alert(userInput);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search by Name"
                onChange={(e) => {
                  setUserInput(e.target.value);
                  props.setData(e.target.value)
                }}
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={call}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
