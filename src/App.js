import React from 'react';
import logo from './logo.svg';
import './App.css';
//import {TodoList} from './TodoList'
import {TodoApp} from './TodoApp.js'
import {Login} from "./component/Login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

const TodoAppView = () => (
    <TodoApp/>
);

const LoginView = () => (
    <Login/>
);

export default class App extends React.Component {
    constructor(props) {
        super(props);

        localStorage.setItem('emailDefault', "elmaricade");
        localStorage.setItem('passwordDefault', "sebastian");
    }


    render() {
        //const todos = [{text:"Learn React", priority:5, dueDate: new Date() },
        // {text:"Learn about APIs", priority:4, dueDate: new Date(2018,8,30) },
        // {text:"write TODO App", priority:3, dueDate: new Date(2018,9,30) }];

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>

                    </header>

                    <br/>
                    <br/>

                    <ul>
                        {localStorage.getItem('isLoggedIn') === "true" ?
                            <Link to="/">Login</Link> :
                            <Link to="/todo"></Link>
                        }
                    </ul>
                    <Route path="/todo" component={TodoAppView}/>
                    <Route exact path="/" component={LoginView}/>
                </div>
            </Router>


        );
    }
}

