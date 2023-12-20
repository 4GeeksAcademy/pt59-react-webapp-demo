import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Card = ({ children, title, img, setFave }) => {
  const { actions } = useContext(Context);

  return (
    <>
      <div className="card" style={{ width: "100%" }}>
        <div className="row g-0">
          {img ? <img src={img} className="img-fluid rounded" alt="..." /> : ""}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {children}
          </div>
          <div className="card-footer d-flex flex-row justify-content-around align-items-center">
            <Link to={""}>Details</Link>
            <button className="btn btn-primary" onClick={setFave}>
              Favorite/Unfavorite
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Card };
