import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import {todos} from './todos.json'
import { render } from '@testing-library/react';

class App extends Component{
  constructor(){
      super();//Para heredar el constructor de Component
      this.state = {
          todos
      }; //Va a crear el estado de este componente.
  }
  
  render(){
      const tareas = this.state.todos.map((todo, i)=>{
      return(
        <div className="col-md-4">
        <div className="card mt-4">
          <div className="card-header">
            <h3>{todo.title}</h3>           
            <span className="badge bg-warning"> {todo.priority}</span>
          </div>
          <div className="card-body">
         
            <h5 className="card-title"><mark>{todo.responsible}</mark></h5>
            <p className="card-text">{todo.description}</p>
          </div>
        </div>
        </div>
      )
    });//todos
    return (
      <div className="App">
          <Navigation title="Remember-it" numTareas={this.state.todos.length}/>
        <header className="App-header">
        
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Rolling</h1>
          <div className="container">
            <div className="row mt-4">
                { tareas }
            </div>
          </div>
        </header>
      </div>
    );
  }//render
}

export default App;
