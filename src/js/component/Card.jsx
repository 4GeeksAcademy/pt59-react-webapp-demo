import React from "react";
import { Link } from "react-router-dom";
import { ModalButton } from "./Modal.jsx";

const Card = ({ children, img, title, recipeId }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{children}</p>
          <Link className="btn btn-primary" to={`/recipe/${recipeId}`}>
            View Recipe
          </Link>
        </div>
      </div>
    </>
  );
};

export { Card };
