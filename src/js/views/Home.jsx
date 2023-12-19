import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";

import { Context } from "../store/appContext.js";

import { Card } from "../component/Card.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(async () => {
    await actions.readContacts();
  }, []);

  return (
    <>
      <section className="d-flex flex-column gap-3 mt-3 mx-5 align-items-center">
        {store.contacts.map((item, idx) => (
          <Card key={idx} contact={item} />
        ))}
        <Link to="/create">Add a contact</Link>
        <Link to="/edit">Edit a contact</Link>
      </section>
    </>
  );
};

export { Home };
