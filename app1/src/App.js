import logo from './logo.svg';
import React from 'react'
import './style.css'
import './App.css';

function App() {
  return (
    <>
    <h2>DeveloperThai.com</h2>
    <div className='title'>React & React Native</div>
    </>
  )
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
