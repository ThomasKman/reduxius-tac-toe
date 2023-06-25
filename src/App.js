import React from 'react';
import './styles.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './pages/Game';
import Select from './pages/Select';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Select />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
