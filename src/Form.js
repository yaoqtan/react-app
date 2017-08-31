import React, { Component } from 'react';

import './input.css';
import Input1 from "./Input1";

import { DatePicker } from 'antd';
import 'antd/dist/antd.css';


class From extends Component {
    /*getInitialState(){
     return {value:'Hello Runoob'};
     };*/
    constructor(props) {
        super(props);
        this.state = {
            value: 'Hello Runoob',
            username:'',
            lastGistUrl:'',
            value1: 'Hello Runoobddd'
        };
        console.log(this);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.componentDidMount=this.componentDidMount.bind(this);
        this.componentWillUnmount=this.componentWillUnmount.bind(this);
        this.handleChange1=this.handleChange1.bind(this);

    };

    componentDidMount(){
        /*this.serverRequest = $.get(this.props.source, function (result) {
            var lastGist = result[0];
            this.setState({
                username: lastGist.owner.login,
                lastGistUrl: lastGist.html_url
            });
        });*/
        console.log(this.props.source);
        fetch(this.props.source).then(function(response){
            // 在这儿实现 setState
            console.log(response)
        });


    };
    componentWillUnmount() {
        this.serverRequest.abort();
    };

    handleChange(event){
        //this.setState({value:event.target.value});
        this.setState({value: event.target.value});

    };
    handleChange1(event){
        //this.setState({value:event.target.value});

        this.setState({value1:event.target.value});
    };
    handleSubmit(event){
        alert(this.state.value);
        event.preventDefault();
    };
    handleClick(){
      this.refs.myInput.focus();
    };


    render() {
        var value = this.state.value;
        var value1 = this.state.value1;
        return (
            <div className="App">
                {this.props.formData}

               {/* {this.state.username}
                <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>*/}
                <DatePicker />
                <form onSubmit={this.handleSubmit}>
                    <Input1 myDataProps={value} updateStateProp={this.handleChange} />


                    <textarea value={value1} onChange={this.handleChange}/>
                    {value1}
                    <input ref="myInput" type="text" value={value} onChange={this.handleChange} />
                    {value}
                    <input type="submit" value="submit" />
                    <div onClick = {this.handleClick}>Refs</div>
                </form>
            </div>
        );
    }
}

export default From;