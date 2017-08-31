import React, { Component } from 'react';

import './input.css';

class Input1 extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.myDataProps} onChange={this.props.updateStateProp} />
                <h1>{this.props.myDataProps}</h1>
            </div>
        );
    }
}

export default Input1;