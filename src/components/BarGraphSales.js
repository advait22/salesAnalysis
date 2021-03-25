import React, { Component } from 'react'
import Highcharts from "highcharts/highstock";
import data from '../Assets/products.json'
import ColumnChart from "highcharts-react-official";

export default class BarGraphSales extends Component {
    constructor (props) {
        super(props)
        this.state = {
            products: data,
            results: []
        }

    }

    componentDidMount() {
        let results = []
        for (let index = 0; index < this.state.products.length; index++) {
            results.push({
                "name": this.state.products[index].Description,
                "data": [this.state.products[index].Quantity]
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
                type: "column"
            },
            title: {
                text: "Top 20 products sold(all locations)"
            },
            xAxis: {
                categories: this.state.results.map(d => d.name),
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: '# Products Sold in UK'
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: this.state.results
        };
        return (
            <ColumnChart highcharts={Highcharts} options={options} containerProps={{ style: { width: '48%' } }} />

        )
    }
}
