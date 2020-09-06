import React, { Component } from 'react'
// import Dictaphone from './components/Dictaphone'
import AddTodo from "./todoapp_components/AddTodo"
import './App.css'
import List from './todoapp_components/List'

export default class App extends Component {
  
 render() {
        return (
            <div className="App container">
              
                {/* <Dictaphone></Dictaphone> */}
                
        <AddTodo></AddTodo>
      
  </div>
            
         
        )
    }
}
