import React, { Component } from 'react'
import Menu from '../MenuList/MenuList'
import './Self.css'
import UserShow from './UserShow/UserShow'
import Recard from '../Recard/Recard'
import UserInfoDetail from './UserInfoDetail/UserInfoDetail'
import Educate from './Educate/Educate'
import Skills from './Skills/Skills'
import Resume from './Resume/Resume'
export default class Self extends Component {
  menus = [
    [
      {
        content: '收藏夹',
        icon: 'star',
        path: '',
      },
      {
        content: '个人笔记',
        icon: 'note',
        path: '',
      },
      {
        content: '我的题解',
        icon: 'docs',
        path: '',
      },
    ],
    [
      {
        content: '做题分析',
        icon: 'piechart'
      },
      {
        content: '进度管理',
        icon: 'progress',
      },
    ],
    [
      {
        content: '个人资料',
        icon: 'doc',
      },
      {
        content: '帐号安全',
        icon: 'safety',
        style: {
          lineHeight: '44px',
        }
      },
      {
        content: '通知与隐私',
        icon: 'bell-l',
      }
    ]
  ]
  render() {
    return (
      <div className='Self'>
        <div className="MenuWrapper">
          <UserShow />
          {
            this.menus.map((val, index) => {
              return (
                <Menu list={val} key={index} />
              )
            })
          }
        </div>
        <Recard className="infoWrapper">
          <p className='top-title'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="font-doc"><path fillRule="evenodd" d="M17 2H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V5a3 3 0 00-3-3zM6 5a1 1 0 011-1h10a1 1 0 011 1v14a1 1 0 01-1 1H7a1 1 0 01-1-1V5zm2 5a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H9z" clipRule="evenodd"></path></svg>
            <span>个人资料</span>
          </p>
          <UserInfoDetail/>
          <Educate/>
          <Skills/>
        </Recard>
        <div className="elseWrapper">
          <Resume/>
        </div>
      </div>
    )
  }
}
