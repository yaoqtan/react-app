import React, { Component } from 'react';
import From from './Form'
import './App.css';

class App1 extends Component {
    render() {
        return (
            <div className="App">

               <h1>Hello {this.props.name} </h1>
                <From source="https://api.github.com/users/octocat/gists" formData="form"/>

            </div>
        );
    }
}

export default App1;