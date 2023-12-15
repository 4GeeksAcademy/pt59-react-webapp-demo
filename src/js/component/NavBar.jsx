import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

const NavBar = ({}) => {
  const { actions } = useContext(Context);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let searchQuery = new URLSearchParams(window.location.search).get("s");

    if (searchQuery) {
      setSearch(searchQuery);
      actions.searchSpoonacular(searchQuery);
    }
  }, []);

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Wobsite
        </Link>
        <form
          className="d-flex"
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            window.history.replaceState(null, "", `?s=${search}`);
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
