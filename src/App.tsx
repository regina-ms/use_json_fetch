import React from 'react';
import './App.css';
import FetchData from './comonents/FetchData';

function App() {
  return (
    <div className="App">
      <FetchData url={'http://localhost:7070/data'} />
      <FetchData url={'http://localhost:7070/error'} />
      <FetchData url={'http://localhost:7070/loading'} />
    </div>
  );
}

export default App;
