import React, { Component } from 'react'
import TaskHead from '../TaskHead/TaskHead';
import Tasks from '../Tasks/Tasks';
export default class Distributed extends Component {
  render() {
    return (
      <div className='Task_back'>
        <div>
          <TaskHead title='分配给我的' style={{ color: '#2b7757',fontSize:'24px' }} />
        </div>
        <div>
          <Tasks hideInput />
        </div>
      </div>
    )
  }
}
