import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

const NavBar = ({}) => {
  const { actions } = useContext(Context);
  const [search, setSearch] = useState("");

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand">Wobsite</Link>
        <form
          className="d-flex"
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            actions.searchSpoonacular(search);
          }}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export { NavBar };
