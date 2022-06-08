import React, { Component } from 'react'
import './DisList.css'
import { Segmented,Empty } from 'antd'
import DisItem from './DisItem/DisItem'
export default class DisList extends Component {
  tags = [
    'c',
    'c#',
    'pythom',
    'js',
    'golang',
    'java',
    'php',
    '动态规划'
  ]
  items = [
    {},
    {},
    {},
    {},
    {},
    {},
  ]
  render() {
    return (
      <div className='DisList relative'>
        <Segmented options={this.tags} />
        {
          this.items.length?
          this.items.map((val,i)=>{
            return (<DisItem {...val} key = {i}/>)
          }):
          <Empty className='center'/>
        }
      </div>
    )
  }
}

