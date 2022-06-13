import React from 'react';
import './App.css';
import TopBar from '../else/TopBar/TopBar';
import MyRouter from '../else/MyRouter/MyRouter';
import { HashRouter } from 'react-router-dom'
class App extends React.Component {
    render() {
        return (
            <div id='App'>
                <HashRouter>
                    <TopBar />
                    <div style={{ height: 'calc(100vh - 50px)', overflow: 'auto', }}>
                        <MyRouter />
                    </div>
                </HashRouter>
            </div>
        )
    }
}
export default App;
