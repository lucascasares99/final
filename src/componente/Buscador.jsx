import React from "react";

function Buscador({ terminoBusqueda, setTerminoBusqueda }) {
  const handleChange = (e) => {
    setTerminoBusqueda(e.target.value);
  };

  return (
    <div className="buscador">
      <input
        type="text"
        value={terminoBusqueda}
        onChange={handleChange}
        placeholder="Buscar personaje..."
      />
    </div>
  );
}

export default Buscador;
