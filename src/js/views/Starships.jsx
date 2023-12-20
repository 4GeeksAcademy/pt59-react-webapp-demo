import React from "react";

import SingleItemLayout from "../component/SingleItemLayout.jsx";
import { useParams } from "react-router";

const Starships = () => {
  const { id } = useParams();

  return (
    <section className="container mt-3">
      <h1>Starships</h1>
      <SingleItemLayout img={"https://placekitten.com/250"}>
        <code>{id}</code>
      </SingleItemLayout>
    </section>
  );
};

export default Starships;
