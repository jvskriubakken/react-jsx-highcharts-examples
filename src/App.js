import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Highcharts from 'highcharts';
import {
    HighchartsChart, withHighcharts, XAxis, YAxis, Pane, SolidGaugeSeries
} from 'react-jsx-highcharts';

import addHighchartsMore from 'highcharts/highcharts-more';
import addSolidGaugeModule from 'highcharts/modules/solid-gauge';

// Apply addtional modules
addHighchartsMore(Highcharts);
addSolidGaugeModule(Highcharts);

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
      const kmph = 80;
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
                  startAngle={-150}
                  endAngle={150}
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
                  lineWidth={1}
                  minorTickInterval={null}
                  tickPixelInterval={10}
                  tickWidth={2}
                  labels={{
                      y: 16,
                      style: { display: 'none' }
                  }}
                  min={0}
                  max={200}>
                  <YAxis.Title y={-110}>Speed</YAxis.Title>
                  <SolidGaugeSeries
                      name='Speed'
                      data={[ kmph ]}
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
