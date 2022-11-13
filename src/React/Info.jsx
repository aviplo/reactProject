import React from "react";

const Info = () => {
  const data = localStorage.getItem("userObj");
  const user = JSON.parse(data);
  return (
    <React.Fragment>
      <h1>name: {user.name}</h1>
      <h3>email: {user.email}</h3>
      <h3>
        address: {user.address.street} {user.address.city}{" "}
        {user.address.zipcode}
      </h3>
      <h4>
        location: {user.address.geo.lat}, {user.address.geo.lng}
      </h4>
      <h3>phone number: {user.phone}</h3>
      <h3>website: {user.website}</h3>
      <h4>company: {user.company.name}</h4>
      <h5>description: {user.company.bs}</h5>
    </React.Fragment>
  );
};

export default Info;
