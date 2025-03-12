import React from "react";

function Personaje({ personaje }) {
  const { name, image, status } = personaje;

  return (
    <div className="personaje">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Status: {status}</p>
    </div>
  );
}

export default Personaje;
