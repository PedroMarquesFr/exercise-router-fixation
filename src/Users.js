import React from "react";

const Users = ({ greetingMessage = "Hi There", match }) => (
  <div>
    <h2> Users </h2>
    <p>
      {greetingMessage}, this is my awesome Users component, {match.params.id}
    </p>
  </div>
);

export default Users;
