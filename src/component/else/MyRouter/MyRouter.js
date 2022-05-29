import React, { Component } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom";
import routes from './routes';
export default class MyRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Routes>
                    {routes.map((val, i) => {
                        return <Route {...val} key={i} />
                    })}
                </Routes>
            </HashRouter>
        )
    }
}
