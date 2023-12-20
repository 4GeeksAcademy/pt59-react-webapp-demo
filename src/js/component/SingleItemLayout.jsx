import React from "react";

const SingleItemLayout = ({ children, img }) => {
  return (
    <div>
      <h3>SingleItemLayout</h3>
      <img src={img} alt="" />
      {children}
    </div>
  );
};

export default SingleItemLayout;
