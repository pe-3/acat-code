import React, { Component } from 'react'
import './UserShow.css'
export default class UserShow extends Component {
    static defaultProps = {
        avatar:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202103%2F30%2F20210330141929_161cb.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652842290&t=527c7920901fdf8db3af9cc4edc5b273',
        userName:'用户昵称',
        signature:'好好学习，天天向上',
    }
    render() {
        let {avatar, userName, signature} = this.props;
        return (
            <div className='UserShow'>
                <div className="avatar">
                    <img src={avatar} alt={`${userName}的头像`} />
                </div>
                <p className='userName'>{userName}</p>
                <p className='signature'>{signature}</p>
            </div>
        )
    }
}
