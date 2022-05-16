import './App.css';

import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
