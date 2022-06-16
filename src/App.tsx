import React from 'react';
import "./App.css";
import { Counter } from './components/Counter';
import { Navbar } from './components/Navbar';
import { Title } from './components/Title';


function App() {

  return (
    <div>
      <Navbar/>
      <Title color='red' variant='md'>React live</Title>
      <Counter/>
    </div>
  );
}

export default App;
