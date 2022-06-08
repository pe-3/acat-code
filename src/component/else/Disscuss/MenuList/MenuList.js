import React, { Component } from 'react'
import './MenuList.css'
import { StarOutlined, BellOutlined, MessageOutlined, ReadOutlined } from '@ant-design/icons'
export default class MenuList extends Component {
    menuItems = [
        {
            icon: StarOutlined,
            text: '收藏',
            fontSize:'17px',
        },
        {
            icon: BellOutlined,
            text: '订阅',
            fontSize:'17px',
        },
        {
            icon: MessageOutlined,
            text: '讨论',
            fontSize:'17px',
        },
        {
            icon: ReadOutlined,
            text: '文章',
            fontSize:'17px',
        },
    ]
    render() {
        return (
            <div className='MenuList'>
                {
                    this.menuItems.map((val,i)=>{
                        let MenuIcon = val.icon;
                        return (
                            <div key = {i}>
                                <p style={{marginBottom:'1px'}}>
                                    <MenuIcon style={{fontSize:val.fontSize}}/>
                                </p>
                                <p>{val.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
