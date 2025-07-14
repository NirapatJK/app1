import logo from './logo.svg';
import React from 'react'
import './App.css';

function App() {
  const divStyle = {
    color: 'red',
    backgroundColor: 'powderblue',
    fontSize: 'larger',
    padding: '3px',
  }
  return <div style={divStyle}>Hello React</div>
  //return (<h3>Hello World! <br/>สวัสดีชาวโลก</h3>);
}

export default App;
