import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Highcharts from 'highcharts';
import {
    HighchartsChart, withHighcharts, XAxis, YAxis, Pane, SolidGaugeSeries
} from 'react-jsx-highcharts';

const plotOptions = {
    solidgauge: {
        dataLabels: {
            y: 5,
            borderWidth: 0,
            useHTML: true
        }
    }
};

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p><p>
          <HighchartsChart gauge plotOptions={plotOptions}>
              <Pane
                  center={['50%', '85%']}
                  size='100%'
                  startAngle={-90}
                  endAngle={90}
                  background={{
                      backgroundColor: '#EEE',
                      innerRadius: '60%',
                      outerRadius: '100%',
                      shape: 'arc'
                  }} />
              <XAxis />
              <YAxis
                  stops={[
                      [0.1, '#55BF3B'],
                      [0.5,  '#DDDF0D'],
                      [0.9, '#DF5353']
                  ]}
                  lineWidth={0}
                  minorTickInterval={null}
                  tickPixelInterval={400}
                  tickWidth={0}
                  labels={{
                      y: 16,
                      style: { display: 'none' }
                  }}
                  min={0}
                  max={200}>
                  <YAxis.Title y={-110}>Speed</YAxis.Title>
                  <SolidGaugeSeries
                      name='Speed'
                      data={[ this.state.kmph ]}
                      dataLabels={{
                          format: '<div style="text-align:center"><span style="font-size:25px;color:black">{y}</span><br/><span style="font-size:12px;color:silver">km/h</span></div>',
                          y: -50
                      }}
                      tooltip={{
                          valueSuffix: ' km/h'
                      }}
                  />
              </YAxis>

          </HighchartsChart>
      </p>
      </div>
    );
  }
}

export default withHighcharts(App, Highcharts);
