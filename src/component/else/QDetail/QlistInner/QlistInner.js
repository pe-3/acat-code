import React, { Component } from 'react'
import './QlistInner.css'
import { Input, Button, Select } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import MyGap from '../../MyGap/MyGap';
const { Search } = Input;
export default class QlistInner extends Component {
  getOpt = (max) => {
    let res = [];
    for (let i = 0; i < max; i++) {
      res.push(
        {
          label: i + 1,
          value: i + 1,
        }
      )
    };
    return res;
  }
  list = [
    {},
    {
      level:'中等'
    },
    {
      level:'困难'
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {
      index:'50',
    },
  ]
  render() {
    return (
      <div className='QlistInner'>
        <div className="QlistInner_head">
          <Search placeholder='搜索题目' />
          <div style={{ flex: '1', marginLeft: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <Select defaultValue='1' style={{ width: '60px' }} options={this.getOpt(50)} />
            <MyGap gap={2} />
            <Button>
              <LeftOutlined />
            </Button>
            <MyGap gap={2} />
            <Button>
              <RightOutlined />
            </Button>
          </div>
        </div>
        <div className="QlistInner_content">
          {
            this.list.map((val, i) => {
              return <SingleInnerQ key={i} {...val} />
            })
          }
        </div>
      </div>
    )
  }
}

class SingleInnerQ extends Component {
  static defaultProps = {
    index: '1',
    title: '两数之和',
    level: '简单',
  }
  render() {
    let { index, title, level } = this.props;
    let color = '';
    switch (level) {
      case '简单':
        color = 'rgb(90,183,38)';
        break;
      case '中等':
        color = 'rgb(255,161,25)';
        break;
      case '困难':
        color = 'rgb(239,71,67)';
        break;
      default:
        break;
    }
    return (
      <div className='SingleInnerQ'>
        <div>
          <span>#{index}</span>&nbsp;
          <span>{title}</span>
        </div>
        <span style={{color}}>{level}</span>
      </div>
    );
  }
}
