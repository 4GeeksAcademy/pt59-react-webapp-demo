import React from "react";

import SingleItemLayout from "../component/SingleItemLayout.jsx";
import { useParams } from "react-router";

const Vehicles = () => {
  const { id } = useParams();

  return (
    <section className="container mt-3">
      <h1>Vehicles</h1>
      <SingleItemLayout img={"https://placekitten.com/250"}>
        <code>{id}</code>
      </SingleItemLayout>
    </section>
  );
};

export default Vehicles;
