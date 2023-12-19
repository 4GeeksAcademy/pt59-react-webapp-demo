import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const EditContact = () => {
  const nav = useNavigate();
  const { id } = useParams();

  const { actions, store } = useContext(Context);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [addy, setAddy] = useState("");

  useState(() => {
    const contact = store.contacts.find((item) => item.id == id);
    setName(contact.full_name);
    setPhone(contact.phone);
    setEmail(contact.email);
    setAddy(contact.address);
  }, []);

  return (
    <section className="container">
      <form
        className="d-flex flex-column gap-3 mt-3"
        onSubmit={async (e) => {
          e.preventDefault();
          await actions.createContact({
            address: addy,
            agenda_slug: store.agenda_slug,
            email: email,
            full_name: name,
            phone: phone,
          });
          nav("/");
        }}
      >
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            id="phone"
            type="text"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="addy" className="form-label">
            Address
          </label>
          <input
            id="addy"
            type="text"
            className="form-control"
            value={addy}
            onChange={(e) => setAddy(e.target.value)}
          />
        </div>
        <div className="w-100 d-flex flex-row justify-content-around">
          <Link to="/">
            <small>go back without saving</small>
          </Link>
          <button className="btn btn-primary" type="submit">
            Save Contact
          </button>
        </div>
      </form>
    </section>
  );
};

export { EditContact };
