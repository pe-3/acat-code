import React, { Component } from 'react'
import './DisList.css'
import { Segmented, Empty } from 'antd'
import DisItem from './DisItem/DisItem'
import { Pagination } from 'antd'
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
      <div>
        <div className='DisList relative'>
          <Segmented options={this.tags} />
          {
            this.items.length ?
              this.items.map((val, i) => {
                return (<DisItem {...val} key={i} />)
              }) :
              <Empty className='center' />
          }
        </div>
        <div style={{textAlign:'center'}}>
          <Pagination
            showSizeChanger
            defaultCurrent={3}
            total={500}
            style={{
              marginLeft: '20px',
            }}
          />
        </div>
      </div>
    )
  }
}

