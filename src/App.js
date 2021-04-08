import React, { Component } from 'react'
import logo from './sun.svg';
import './App.css';
import Navigation from './components/Navigation'
import {todos} from './todos.json'
import { render } from '@testing-library/react';
import TodoForm from './components/TodoForm';

class App extends Component{
  constructor(){
      super();//Para heredar el constructor de Component
      this.state = {
          todos
      }; //Va a crear el estado de este componente.
      this.handleAddTodo = this.handleAddTodo.bind(this);

  }
  removeTodo(index) {
    if(window.confirm("Are you sure you want to delete it?")){
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      });
    }
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render(){
      const todos = this.state.todos.map((todo, i)=>{
          return(
            <div className="col-md-4">
            <div className="card mt-4">
              <div className="card-header">
                <h3>{todo.title}</h3>           
                <span className={`badge bg-${todo.priority=='high'?"danger":todo.priority=='medium'?"warning":"success"}`}> {todo.priority}</span>
              </div>
              <div className="card-body">
                  <p className="card-text">{todo.description}</p>
                  <h5 className="card-title text-end"><mark>{todo.responsible}</mark></h5>
              </div>
              <div className="card-footer text-end">
                <button className="btn btn-danger btn-circle" onClick={this.removeTodo.bind(this, i)}><i class="bi bi-trash-fill"></i></button>
              </div>
            </div>
            </div>
          )
      });//todos
    return (
      <div className="App">
          <Navigation title="Remember-it" numTareas={this.state.todos.length}/>
        <header className="App-header">
        
         
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-center">
              < img src={logo} className="App-logo" alt="logo" />
                <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
              </div>
              <div className="col-md-8">
              <div className="row">
                { todos }
                </div>
            </div>
            </div>
          </div>
        </header>
      </div>
    );
  }//render
}

export default App;
