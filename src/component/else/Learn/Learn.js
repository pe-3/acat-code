import React, { Component } from 'react'
import './Learn.css'
import LeftMenuList from './LeftMenuList/LeftMenuList'
import { Outlet } from 'react-router-dom'

export default class Learn extends Component {
  render() {
    return (
      <div className='Learn '>
        <div className="learn_left">
          <LeftMenuList />
        </div>
        <div className="learn_right">
          <Outlet/>
        </div>
      </div>
    )
  }
}
