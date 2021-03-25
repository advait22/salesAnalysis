import React, { Component } from 'react'
import data from '../Assets/unique_customers.json'
import { ScatterChart } from 'react-chartkick'
import 'chart.js'


export default class Customers extends Component {
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
            results.push([this.state.month[index].Month,
            [this.state.month[index].CustomerID]
            ])


        }
        this.setState({
            results: results
        }, () => {

        })
    }
    render() {
        return (

            <ScatterChart data={this.state.results} xtitle="Month" ytitle="Total Polpulation" width='50%' title="New Customers" />

        )
    }
}
