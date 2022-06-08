import React, { Component } from 'react'
import './ReadList.css'
import { Avatar, Menu } from 'antd'
import MyGap from '../../MyGap/MyGap'
class ReadItem extends Component {
    static defaultProps = {
        index: 1,
        avatarPic: 'http://localhost:8080/static/media/logo.67674119d005acb5c9e7.jpeg',
        title: '从入门到入睡',
        content: '谨以此文献给迷失在二分查找中的青春岁月⚠️ ⚠️ ⚠️ 本文巨长，(可能)比你见过的所有二分查找解析文都要长，正文 1.5w 余字(不含题解)，全面阅读需 1h 以上。电梯直达评论区🚀yuki的其他文章如下，欢迎阅读指正！'
    }
    render() {
        let { index, avatarPic, title, content } = this.props;
        return (
            <div className='ReadItem'>
                <div className='I_top'>
                    <span className={`er3nkrt1 ${index <= 3 ? 'css-au84nr-Rank' : 'css-1bc9dam-Rank'}`}>{index}</span>
                    <Avatar size='small' src={avatarPic} />
                    <MyGap gap={4} />
                    <span style={{ fontWeight: 'bolder' }}>{title}</span>
                </div>
                <div className='I_bottom'>
                    {content}
                </div>
            </div>
        );
    }
}
export default class ReadList extends Component {
    items = [
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
    ]
    render() {
        return (
            <div className='ReadList'>
                <div className="ReadList_title" style={{ marginBottom: '10px' }}>
                    <span className='css-142lbv5-Title' style={{ lineHeight: '22px' }}>必读榜</span>
                    <MyGap gap={20} />
                    <Menu mode="horizontal" defaultSelectedKeys={'日'} style={{ verticalAlign: 'middle', lineHeight: '22px' }} items={[
                        {
                            label: '日',
                            key: '日',
                        },
                        {
                            label: '周',
                            key: '周',
                        },
                        {
                            label: '月',
                            key: '月',
                        },
                    ]} />
                </div>
                {
                    this.items.map((val, i) => {
                        return (
                            <ReadItem key={i} index = {i + 1} {...val} />
                        )
                    })
                }
            </div>
        )
    }
}
