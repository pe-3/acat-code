import React from 'react';
import './App.css';
import TopBar from '../else/TopBar/TopBar';
import MyRouter from '../else/MyRouter/MyRouter';
class App extends React.Component {
    render() {
        return (
            <div id='App'>
                <TopBar />
                <MyRouter />
            </div>
        )
    }
}

export default App;
