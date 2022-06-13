import React, { Component } from 'react'
import TaskHead from '../TaskHead/TaskHead';
import Tasks from '../Tasks/Tasks';
import './Plan.css'
export default class Plan extends Component {
  render() {
    return (
      <div className='Task_back Plan'>
        <div>
          <TaskHead title='计划内' style={{ color: '#35837f' }} />
        </div>
        <div>
          <Tasks inputcolor='#d3f1ef' inputid='plan' inputiconColor='#35837f' />
        </div>˝
      </div>
    )
  }
}
