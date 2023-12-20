import React from "react";

import SingleItemLayout from "../component/SingleItemLayout.jsx";
import { useParams } from "react-router";

const People = () => {
  const { id } = useParams();

  return (
    <section className="container mt-3">
      <h1>People</h1>
      <SingleItemLayout>
        <code>{id}</code>
      </SingleItemLayout>
    </section>
  );
};

export default People;
