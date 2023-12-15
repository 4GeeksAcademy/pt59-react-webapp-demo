import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";

import { Context } from "../store/appContext";

const RecipePage = () => {
  const { store, actions } = useContext(Context);
  const { recipe_id } = useParams();

  useEffect(() => {
    actions.getSingleRecipe(recipe_id);
  }, []);

  return (
    <>
      <section className="container">
        <div className="modal-header">
          <h1 className="modal-title">{store.selectedRecipe?.title}</h1>
        </div>
        <div className="modal-body">
          <img
            src={store.selectedRecipe?.image}
            className="rounded w-100 mb-3"
          />
          <p
            dangerouslySetInnerHTML={{
              __html: store.selectedRecipe?.summary,
            }}
          ></p>
        </div>
        <div className="modal-footer">
          <small>
            Ready in {store.selectedRecipe?.readyInMinutes} minutes.
          </small>

          <a href={store.selectedRecipe?.sourceUrl} target="_blank">
            <small>View the recipe.</small>
          </a>
        </div>
      </section>
    </>
  );
};

export { RecipePage };
