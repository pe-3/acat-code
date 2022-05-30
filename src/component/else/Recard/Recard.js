import React, { Component } from 'react'
import './Recard.css'
export default class Recard extends Component {
    static defaultProps = {
        className:'',
    }
    render() {
        return (
            <div className={`Recard ${this.props.className}`}>{
                this.props.children
            }</div>
        )
    }
}
