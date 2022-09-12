import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ logout }) => {
  return (
    <div>
      <Link to="/dashboard">Go to Dashboard</Link>
      <h1>Success you login</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
