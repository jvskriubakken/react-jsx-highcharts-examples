import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Gauge from "./Gauge";
import styled from 'styled-components';

class App extends Component {

    render() {

        const values = [0, 10, 50, 55, 50.5, 78, 99, 100];

        const Gauges = styled.div`
          display: flex;  
          flex-direction: row;
          max-width: 1080px;
        `;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Gauges>
                    {values.map(value => {
                        return <Gauge value={value}/>
                    })}
                </Gauges>
            </div>
        );
    }
}

export default App;
