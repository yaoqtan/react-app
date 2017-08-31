import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sparkline from 'react-sparkline';

import ReactHighcharts from 'react-highcharts';
import Highcharts from 'highcharts';

/*var ReactHighcharts = require('react-highcharts');*/
/*var Highlight = require('react-highlight');*/

class App extends Component {
  render() {
      var values = [
          {
              date: "2014-06-23T00:21:59.271Z",
              value: 2
          },
          {
              date: "2014-06-24T00:21:59.271Z",
              value: 4
          }
      ];
      var config = {
          xAxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          series: [{
              data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
          }]
      };


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <Sparkline data={[5, 10, 5, 20, 8, 15]} limit={5} width={100} height={20} margin={5} />
          <ReactHighcharts config={config} />



        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
