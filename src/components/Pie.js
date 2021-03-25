import data from '../Assets/pie.json'
import { GeoChart } from 'react-chartkick'
import 'chart.js'


import React, { Component } from 'react'

export default class Pie extends Component {
    constructor (props) {
        super(props)
        this.state = {
            countryData: data,
            results: [],
        }

    }

    componentDidMount() {
        let results = []
        for (let index = 0; index < this.state.countryData.length; index++) {
            results.push([this.state.countryData[index].Country, Math.round(this.state.countryData[index].Total)])

        }
        this.setState({
            results: results
        }, () => {

        })
    }
    render() {
        return (
            <div>
                <GeoChart data={this.state.results} title={"HeatMap(Total Sales)"} />
            </div>
        )
    }
}

