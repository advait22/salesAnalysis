import React, { Component } from 'react'
import novdata from '../Assets/nov_sales.json'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


export default class Sales extends Component {
    constructor (props) {
        super(props)
        this.state = {
            month: novdata,
            results: []
        }

    }

    componentDidMount() {
        let results = []
        for (let index = 0; index < this.state.month.length; index++) {
            results.push(
                this.state.month[index].Total
            )
        }

        this.setState({
            results: results
        }, () => {

        })
    }
    render() {
        const options = {

            title: {
                text: 'Total Sale in November'
            },



            yAxis: {
                title: {
                    text: 'Total Sale'
                }
            },

            xAxis: {
                title: {
                    text: "Days"
                },

                accessibility: {
                    rangeDescription: 'Range: 1 to 12'
                }
            },

            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 1
                }
            },

            series: [{
                name: 'November',
                data: this.state.results
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

        };
        return (

            <HighchartsReact
                containerProps={{ style: { width: '48%' } }}
                highcharts={Highcharts}
                options={options}
            />

        )
    }
}
