import React, { useContext, useState } from "react";
import "../../styles/home.css";

import { Context } from "../store/appContext.js";

import { Card } from "../component/Card.jsx";

const Home = () => {
  const { store } = useContext(Context);

  return (
    <>
      <section className="d-flex flex-column gap-3 mt-3 align-items-center">
        {store.searchResults.map((recipe, idx) => (
          <Card
            key={idx}
            title={recipe.title}
            img={recipe.image}
            recipeId={recipe.id}
          ></Card>
        ))}
      </section>
    </>
  );
};

export { Home };
