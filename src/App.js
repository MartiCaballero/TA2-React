import React from 'react';
import './App.css';
import Card from './Card';  // Importamos el componente Card

function App() {
  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <Card>
        <h2>Desarrollo del Componente Card</h2>
        <p><strong>Descripción:</strong> Crear un componente en React que muestre información con props.</p>
        <p><strong>Persona asignada:</strong> Juan Pérez</p>
        <p><strong>Fecha de inicio:</strong> 2024-09-10</p>
        <p><strong>Fecha de fin:</strong> 2024-09-12</p>
      </Card>
      <Card>
        <h2>Estilos en CSS</h2>
        <p><strong>Descripción:</strong> Aplicar estilos a un componente utilizando un archivo CSS separado.</p>
        <p><strong>Persona asignada:</strong> Ana García</p>
        <p><strong>Fecha de inicio:</strong> 2024-09-11</p>
        <p><strong>Fecha de fin:</strong> 2024-09-13</p>
      </Card>
      <Card>
        <h2>Pruebas Unitarias</h2>
        <p><strong>Descripción:</strong> Implementar pruebas unitarias para los componentes creados.</p>
        <p><strong>Persona asignada:</strong> Carlos Martínez</p>
        <p><strong>Fecha de inicio:</strong> 2024-09-12</p>
        <p><strong>Fecha de fin:</strong> 2024-09-15</p>
      </Card>
    </div>
  );
}

export default App;
