import React, { useState } from 'react';

const About = () => {
  const [destination, setDestination] = useState('');

  const handleAddDestination = () => {
    // Lógica para agregar destino (llamada a la API, etc.)
    console.log('Agregar destino:', destination);
  };

  return (
    <div>
      <h2>Agregar Destino</h2>
      <form>
        <label>
          Destino:
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleAddDestination}>
          Agregar Destino
        </button>
      </form>
    </div>
  );
};

export default About;
