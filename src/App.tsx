import React, { useState } from 'react';
import "./App.css";
import { Navbar } from './components/Navbar';
import { Title } from './components/Title';


function App() {
  const [count, setCount] = useState(0);



  return (
    <div>
      <Navbar/>
      <Title color='red' variant='md'>React.js live</Title>
      <p>Click Counter: {count}</p>
      <button onClick={(e) => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
