import React, { Component } from 'react'
import { Input, Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import './Qcomment.css'
import DisList from '../../Disscuss/DisList/DisList'
const { Search } = Input
export default class Qcomment extends Component {
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <div className="Qcomment_head">
          <Search placeholder='搜索题解' />
          <Button style={{ background: 'rgb(45,181,93)', color: 'white' }}><EditOutlined /> 写题解</Button>
        </div>
        <DisList/>
      </div>
    )
  }
}
