import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import CreateNote from './components/addNote';
import CreateTodo from './components/addTodo';
import AllTodos from './components/AllTodos';
import DeleteAllTodos from './components/DeleteDoneTodos';
import DeleteTodo from './components/DeleteTodo';
import DisplayNotes from './components/displayNotes';
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
        <Route path="/createnote" exact={true} component={CreateNote} />
        <Route path="/createtodo" exact={true} component={CreateTodo} />
        <Route path="/notes" exact={true} component={DisplayNotes} />
        <Route path="/todos" exact={true} component={AllTodos} />
        <Route path="/todos/:mail" exact={true} component={AllTodos} />
        <Route path="/edit-todo/:id" exact={true} component={EditTodo} />
        <Route path="/delete-todo/:id" exact={true} component={DeleteTodo} />
        <Route path="/delete-all-todos" exact={true} component={DeleteAllTodos} />
      </BrowserRouter>
    );
  }
}

export default App;

// var CryptoJS = require("crypto-js");


// function App() {
//   var data = [{ mail: "prasunap2001@gmail.com", pass: "suna16" }]

//   // Encrypt
//   var encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), 'my-secret-key@123').toString();
//   //log encrypted data
//   console.log('Encrypt Data -')
//   console.log(encrypted);

//   // Decrypt
//   var bytes = CryptoJS.AES.decrypt(encrypted, 'my-secret-key@123');
//   var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

//   //log decrypted Data
//   console.log('decrypted Data -')
//   console.log(decryptedData);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div>Encrypt Data -{encrypted}</div>
//         <div>
//           {decryptedData.map(function (object) {
//             console.log(object)
//           })}
//         </div>
//       </header>
//     </div>
//   );
// }
// export default App;