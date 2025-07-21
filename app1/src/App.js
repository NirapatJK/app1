//import logo from './logo.svg';
//import './style.css'
//import './App.css';
import React from 'react'
import{Header,Content,Footer} from './func-components'

function App(){
  return(
    [<Header/>,<Content/>,<Footer/>]
  )
}
export default App

/*
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
*/