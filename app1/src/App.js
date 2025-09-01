//import logo from './logo.svg';
//import './style.css'
//import './App.css';
//import{Header,Content,Footer} from './func-components'
//import Button from './class-components'
//import MessageBox from './state-func'
//import {userContext} from './context'
//import Header2 from './context-header2'
//import Content2 from './context-content2'
//import React from 'react'
import {createContext, useState} from 'react'
import Menu from "./component/Menu";
import Quiz from "./component/Quiz";
import Score from "./component/Score";
import './App.css'

export const DataContext = createContext()

function App() {
  const [appState, setAppState] = useState("menu")
  const [score, setScore] = useState(0)
  return (
    <DataContext.Provider value={{appState,setAppState,score,setScore}}>
      <div className ="App">
        <h1>Web Development Quiz</h1>
        {appState === "menu" && <Menu/>}
        {appState === "quiz" && <Quiz/>}
        {appState === "score" && <Score/>}
      </div>
    </DataContext.Provider>
  );
}

export default App;