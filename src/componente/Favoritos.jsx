import React from 'react';

function Favoritos({ favoritos }) {
  return (
    <div className="favoritos">
      <h2>Favoritos</h2>
      {favoritos.length > 0 ? (
        <div className="personajes-lista">
          {favoritos.map((personaje, index) => (
            <div key={index} className="personaje">
              <img src={personaje.image} alt={personaje.name} />
              <h3>{personaje.name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p>No tienes personajes favoritos.</p>
      )}
    </div>
  );
}

export default Favoritos;
