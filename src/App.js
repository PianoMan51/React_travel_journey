import React from "react";
import Card from "./components/Card";
import data_file from "./data.js";

export default function App() {
  const cards = data_file.map((item) => {
    return <Card item={item} />;
  });

  return (
    <div className="journey">
      <div className="banner">
        <h4>my travel jourey</h4>
      </div>
      {cards}
    </div>
  );
}
