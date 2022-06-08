import React, { Component } from 'react'
import { Button } from 'antd';
import {EllipsisOutlined} from '@ant-design/icons'
import './Today.css'
import Tasks from '../Tasks/Tasks';
export default class Today extends Component {
  date = new Date();
  getDay = () => {
    let day = this.date.getDay();
    switch (day) {
      case 1:
        day = '一'
        break;
      case 2:
        day = '二'
        break;
      case 3:
        day = '三'
        break;
      case 4:
        day = '四'
        break;
      case 5:
        day = '五'
        break;
      case 6:
        day = '六'
        break;
      case 0:
        day = '日'
        break;
      default:
        break;
    }
    return day;
  }
  render() {
    return (
      <div className='Today'>
        <div className="Today_top">
          <div>
            <h1 style={{ fontSize: '28px', color: 'white', marginBottom: '-2px' }}>我的一天</h1>
            <span>{this.date.getMonth() + 1}月{this.date.getDate()}日&nbsp;星期{this.getDay()}</span>
          </div>
          <div>
            <Button size='small' id='darkBtn'>
              <EllipsisOutlined  />
            </Button>
          </div>
        </div>
        <div className='Today_list'>
            <Tasks/>
        </div>
      </div>
    )
  }
}
