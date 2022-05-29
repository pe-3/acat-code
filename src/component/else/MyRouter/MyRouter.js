import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import routes from './routes';
export default class MyRouter extends Component {
    render() {
        return (
                <Routes>
                    {routes.map((val, i) => {
                        return <Route {...val} key={i} />
                    })}
                </Routes>
        )
    }
}
