import React, {Component} from 'react';
import Highcharts from 'highcharts';
import {
    HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Pane, SolidGaugeSeries
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


class Gauge extends Component {


    render() {

        //Highcharts.Highcharts.setOptions(HighchartsTheme.dark);

        const percent = this.props.value;

        return (
            <HighchartsChart gauge plotOptions={plotOptions}>
                <Chart width={150} height={250} />
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
                    }}/>
                <XAxis/>
                <YAxis
                    stops={[
                        [0.49, 'red'],
                        [0.69, 'orange'],
                        [0.97, 'yellow'],
                        [1, 'green']
                    ]}
                    lineWidth={0}
                    minorTickInterval={null}
                    tickPixelInterval={400}
                    tickWidth={0}
                    labels={{
                        y: 16,
                        style: {display: 'none'}
                    }}
                    min={0}
                    max={100}>
                    <YAxis.Title y={-110}>Percent</YAxis.Title>
                    <SolidGaugeSeries
                        name='Percent'
                        data={[percent]}
                        dataLabels={{
                            format: '<div style="text-align:center"><span style="font-size:16px;color:black">{y}</span><br/><span style="font-size:12px;color:silver">%</span></div>',
                            y: -30
                        }}
                        tooltip={{
                            valueSuffix: ' %'
                        }}
                    />
                </YAxis>

            </HighchartsChart>
        );
    }
}

export default withHighcharts(Gauge, Highcharts);