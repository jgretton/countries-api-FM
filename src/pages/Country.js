import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Header } from "../components/Header";

export const Country = ({ state }) => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <Header />
      <Link to="/">Back</Link>
      <p>Country Page</p>
    </div>
  );
};
