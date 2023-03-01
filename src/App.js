import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './pages/Greetings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  );
}

export default App;
