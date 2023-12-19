import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ModalButton } from "./Modal.jsx";
import { Context } from "../store/appContext.js";

const Card = ({ contact }) => {
  const { actions } = useContext(Context);

  const [img, setImg] = useState();

  useEffect(() => {
    setImg(`https://placekitten.com/${Math.floor(Math.random() * 500) + 250}`);
  }, []);

  return (
    <>
      <div className="card" style={{ width: "100%" }}>
        <div className="row g-0">
          <div className="col-4">
            <img src={img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-6">
            <div className="card-body">
              <h5 className="card-title">{contact.full_name}</h5>
              <ul>
                <li>{contact.address}</li>
                <li>{contact.email}</li>
                <li>{contact.phone}</li>
              </ul>
            </div>
          </div>
          <div className="col-2 d-flex flex-column justify-content-around align-items-center">
            <Link to={`/edit/${contact.id}`}>
              <i className="fa-solid fa-pen-to-square"></i>
            </Link>
            <i
              className="fa-solid fa-trash"
              onClick={() => actions.deleteContact(contact.id)}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export { Card };
