import React, { useContext, useState } from "react";
import "../../styles/home.css";

import { Context } from "../store/appContext";

import { Modal } from "../component/Modal.jsx";
import { Card } from "../component/Card.jsx";

const Home = () => {
  const { store } = useContext(Context);
  const [selectedRecipe, setSelectedRecipe] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const getSingleRecipe = async (id) => {
    setIsLoaded(false);
    const url = `https://api.spoonacular.com/recipes/${id}/information`;
    const apiKey = "150b3d1fc44d4503a4808decd9346790";

    const resp = await fetch(`${url}?apiKey=${apiKey}`);
    const data = await resp.json();
    setSelectedRecipe(data);
    setIsLoaded(true);
  };

  return (
    <>
      <section className="d-flex flex-column gap-3 mt-3 align-items-center">
        {store.searchResults.map((recipe, idx) => (
          <Card
            key={idx}
            title={recipe.title}
            img={recipe.image}
            onClick={() => getSingleRecipe(recipe.id)}
          ></Card>
        ))}
        <Modal
          modalId="recipe-modal"
          recipe={selectedRecipe}
          isLoaded={isLoaded}
        />
      </section>
    </>
  );
};

export { Home };
