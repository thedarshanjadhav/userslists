import React from "react";
import Records from "./Data.json";
import { useState } from "react";
import UsersList from "./UsersList";
import { Link } from "react-router-dom";

// import axios from "axios";
let filterArray = [];
function Users() {
  const [userInput, setUserInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Records.slice(firstIndex, lastIndex);
  filterArray = Records.slice(0, 20);
  const npage = Math.ceil(Records.length / recordsPerPage);
  const call = () => {
    alert(userInput);
  };
  // const numbers = [...Array(npage + 1).keys()].slice(1)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Users
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search by Name"
                onChange={(e) => {
                  setUserInput(e.target.value);
                }}
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="button"
              // onClick={call}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* </div> */}
      {/* // ======================== */}
      {/* <div> */}
      <div className="container my-3">
        <h2>Users List</h2>
        <div className="row">
          {records
            .filter(
              (element) =>
                element.first_name.toLowerCase().includes(userInput.toLowerCase()) ||
                element.gender.toLowerCase().includes(userInput.toLowerCase()) ||
                element.domain.toLowerCase().includes(userInput.toLowerCase())
              // element.available.includes(userInput) ||
            )
            .map((element, i) => (
              <div className="col-md-3" key={i}>
                {console.log("records", records)}
                <UsersList
                  id={element.id}
                  imageUrl={element.avatar}
                  first_name={element.first_name}
                  last_name={element.last_name}
                  email={element.email}
                  gender={element.gender}
                  domain={element.domain}
                  available={element.available ? "Available" : null}
                />
              </div>
            ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-dark" onClick={prePage}>
            {" "}
            &larr; Previous
          </button>
          <button type="button" className="btn btn-dark" onClick={nextPage}>
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  // function changeCPage(id) {

  // }
  function nextPage() {
    if (currentPage !== npage) setCurrentPage(currentPage + 1);
  }
}

export default Users;
