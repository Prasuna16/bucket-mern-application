import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import CreateNote from './components/addNote';
import CreateTodo from './components/addTodo';
import AllTodos from './components/AllTodos';
import DeleteAllTodos from './components/DeleteDoneTodos';
import DeleteNote from './components/DeleteNote';
import DeleteTodo from './components/DeleteTodo';
import DisplayNotes from './components/displayNotes';
import EditNote from './components/EditNote';
import EditTodo from './components/EditTodo';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      status: false,
      user: {},
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/signup" exact={true} component={Signup} />
        <Route path="/createnote/:user" exact={true} component={CreateNote} />
        <Route path="/createtodo/:user" exact={true} component={CreateTodo} />
        <Route path="/notes/:user" exact={true} component={DisplayNotes} />
        <Route path="/todos/:user" exact={true} component={AllTodos} />
        <Route path="/edit-todo/:id/:user" exact={true} component={EditTodo} />
        <Route path="/edit-note/:id/:user" exact={true} component={EditNote} />
        <Route path="/delete-todo/:id/:user" exact={true} component={DeleteTodo} />
        <Route path="/delete-note/:id/:user" exact={true} component={DeleteNote} />
        <Route path="/delete-all-todos/:user" exact={true} component={DeleteAllTodos} />
      </BrowserRouter>
    );
  }
}

export default App;