import React from 'react';
import './App.css';
import TopBar from '../else/TopBar/TopBar';
import MyRouter from '../else/MyRouter/MyRouter';
import {HashRouter} from 'react-router-dom'
class App extends React.Component {
    render() {
        return (
            <div id='App'>
                <HashRouter>
                    <TopBar />
                    <MyRouter />
                </HashRouter>
            </div>
        )
    }
}
export default App;
