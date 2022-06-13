import React, { Component } from 'react'
import TaskHead from '../TaskHead/TaskHead';
import Tasks from '../Tasks/Tasks';
export default class Task extends Component {
  render() {
    return (
      <div className='Task_back all_Task'>
        <div>
          <TaskHead title='任务' style={{ color: '#fff', fontSize: '24px' }} />
        </div>
        <div>
          <Tasks hideInput/>
        </div>
      </div>
    )
  }
}
