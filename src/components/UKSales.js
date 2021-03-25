import React, { Component } from 'react'
import Highcharts from "highcharts/highstock";
import data from '../Assets/month.json'
import BarChart from "highcharts-react-official";

export default class UKSales extends Component {
    constructor (props) {
        super(props)
        this.state = {
            month: data,
            results: []
        }

    }

    componentDidMount() {
        let results = []
        for (let index = 0; index < this.state.month.length; index++) {
            results.push({
                "name": this.state.month[index].MonthName,
                "data": [this.state.month[index].Total]
            })


        }
        this.setState({
            results: results
        }, () => {

        })
    }
    render() {
        const options = {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Monthly Uk Sales'
            },
            xAxis: {
                // categories: this.state.results.name,
                title: {
                    text: 'Months'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Sales',
                    // align: 'high'
                }
            },
            tooltip: {
                enabled: false
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: 0,
                y: 30,
                floating: false,
                borderWidth: 1,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
                shadow: false
            },
            credits: {
                enabled: false
            },
            series: this.state.results
        };
        return (

            <BarChart highcharts={Highcharts} options={options}
                containerProps={{ style: { width: '48%' } }}
            />

        )
    }
}
