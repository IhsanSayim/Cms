import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './Components/List'
import PersonList from './Components/PersonList'
import Menu from './Components/Menu'
import {Layout} from './Components/Layout'
import { Route,Router } from 'react-router';
import { Home } from './Components/Home';
import { Category } from './Components/Category';
import { Post } from './Components/Post';
import { Deneme } from './Components/Deneme';
import { BrowserRouter } from 'react-router-dom';
import {PostDetail} from "./Components/PostDetail";



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    onChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    }
  render() {
    return (

        <BrowserRouter>
            <div>
                <Layout/>
            <Route exact path='/' component={Home} />
            <Route path='/Category/:id' component={Home} />
            <Route path='/Post/:id' component={PostDetail} />
            <Route path='/deneme' component={Deneme} />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
