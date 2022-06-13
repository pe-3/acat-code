import React, { Component } from 'react';
import TaskHead from '../TaskHead/TaskHead';
import Tasks from '../Tasks/Tasks';
import './Important.css'
class Important extends Component {
    render() {
        return (
            <div className='Important Task_back'>
                <div>
                    <TaskHead title='重要' style={{ color: '#b34869' }} />
                </div>
                <div>
                    <Tasks inputcolor='#fdd4d8' inputid='pink' inputiconColor='#b34869'/>
                </div>
            </div>
        );
    }
}

export default Important;
