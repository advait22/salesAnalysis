import React, { Component } from 'react'
import data from '../Assets/novProd.json'
import { ColumnChart } from 'react-chartkick'
import 'chart.js'

export default class NovemberProduct extends Component {
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
            results.push([this.state.month[index].Description,
            [this.state.month[index].Total]
            ])


        }
        this.setState({
            results: results
        }, () => {

        })
    }
    render() {
        return (
            <div>
                <ColumnChart data={this.state.results} title={"Products sold in November"} xtitle={"Products"} ytitle={"Total Sale"} />
            </div>
        )
    }
}
