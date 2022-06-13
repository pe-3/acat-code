import React, { Component } from 'react'
import './Discuss.css'
import DisList from './DisList/DisList'
import DisTop from './DisTop/DisTop'
import MenuList from './MenuList/MenuList'
import ReadList from './ReadList/ReadList'

export default class Disscuss extends Component {
  render() {
    return (
      <div className='Disscuss layout'>
        <div className="dis-left-part">
          <DisTop />
          <DisList />
        </div>
        <div className="dis-right-part">
          <MenuList />
          <ReadList />
        </div>
      </div>
    )
  }
}
