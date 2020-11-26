import logo from './logo.svg';
import './App.css';
import { Test } from './component/Test';
import React, {Component} from 'react';
import { FetchTest } from './component/FetchTest';
import { TodoList } from './component/TodoList';
//import ReactDOM from 'react-dom';

class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       </header>

      <Test />
      <FetchTest/>
      <TodoList/>
    </div>
  );
  }
}

export default App;
