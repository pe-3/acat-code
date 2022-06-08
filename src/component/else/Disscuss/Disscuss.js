import React, { Component } from 'react'
import './Discuss.css'
import DisList from './DisList/DisList'
import DisTop from './DisTop/DisTop'
import MenuList from './MenuList/MenuList'
import ReadList from './ReadList/ReadList'
import { Pagination } from 'antd'
import MyGap from '../MyGap/MyGap'
export default class Disscuss extends Component {
  render() {
    return (
      <div className='Disscuss layout'>
        <div className="dis-left-part">
          <DisTop />
          <DisList />
          <div>
            <Pagination
              showSizeChanger
              defaultCurrent={3}
              total={500}
              style = {{
                marginLeft:'20px',
              }}
            />
          </div>

        </div>
        <div className="dis-right-part">
          <MenuList />
          <ReadList />
        </div>
      </div>
    )
  }
}
