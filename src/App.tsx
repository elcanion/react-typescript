import React from 'react';
import "./App.css";
import { Navbar } from './components/Navbar';
import { Title } from './components/Title';


function App() {
  return (
    <div>
      <Navbar/>
      <Title color='red' variant='md'>React.js live</Title>
    </div>
  );
}

export default App;
