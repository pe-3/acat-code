import React, { Component } from 'react';
import './DisItem.css'
import { Avatar, Image, Typography, Divider, Tag, Tooltip } from 'antd';
import MyGap, { Dot } from '../../../MyGap/MyGap'
import LikeWithAnimation from '../../../LikeWithAnimation/LikeWithAnimation';
import { EyeIcon } from '../../../Icon/Icon';
import { CommentOutlined, StarOutlined, EllipsisOutlined } from '@ant-design/icons'
const { Title, Paragraph, Text, Link } = Typography;
class DisItem extends Component {
    state = { likeNum: 21, starNum: 10, hasStared: false }
    addLike = () => {
        let { likeNum } = this.state;
        likeNum++;
        this.setState({
            likeNum,
        })
    }
    cancelLike = () => {
        let { likeNum } = this.state;
        likeNum--;
        this.setState({
            likeNum
        })
    }
    toStar = () => {
        let { hasStared, starNum } = this.state;
        if (hasStared) {
            starNum--;
            hasStared = !hasStared;
        } else {
            starNum++;
            hasStared = !hasStared;
        }
        this.setState({
            starNum,
            hasStared
        })
    }
    render() {
        return (
            <div className='DisItem'>
                <div className="dis_item_top">
                    <Avatar size='small' src={<Image src='http://localhost:8080/static/media/logo.67674119d005acb5c9e7.jpeg' />} />
                    <MyGap />
                    <Text strong style={{
                        fontSize: '15px'
                    }}>leetcode 常见报错汇总</Text>
                </div>
                <div className="dis_info" >
                    <Text style={{ color: 'rgb(140,140,140)' }}>用户昵称</Text><MyGap />
                    <Text style={{ color: 'rgb(38,38,38,0.75)' }}>2022-03-31发布了文章</Text>
                    <Dot />
                    <Text style={{ color: 'rgb(38,38,38,0.75)' }}>274阅读</Text><MyGap />
                    <Tag color="green" style={{ fontSize: '12px', lineHeight: 'unset', border: "unset", }}>精选</Tag>
                    <Typography>
                        <Paragraph>
                            leetcode 常见报错汇总 前言 leetcode 也刷了不少题了，经常遇到各种各样的报错，最近更是在一个以前没有遇到的报错上 debug 了很久，最后才发现是测试用例的问题，故干脆怒而直接总结一下常见的报错，方便以后刷题。（我主要使用 c++，其它语言不清楚，应该也可以参考） 内存报错 leetcode 用
                        </Paragraph>
                    </Typography>
                </div>
                <div className='dis_item_bottom'>
                    <LikeWithAnimation likeNum={this.state.likeNum} addLike={this.addLike} cancelLike={this.cancelLike} />
                    <span className='css-15aa6sn-OperationLink'> <EyeIcon style={{
                        fontSize: '18px',
                        marginRight: "4px",
                        marginLeft: "10px",
                    }} /> 12.3k</span>
                    <span className='css-1jk16lb-BaseButtonComponent-OperationButton-CompactOperationButton'>
                        <CommentOutlined style={{
                            width: '20px',
                            height: '20px',
                            fontSize: '16px',
                            transform: 'translate(0,1px)',
                            marginRight: "4px",
                        }} /> 16
                    </span>
                    <span className='css-15aa6sn-OperationLink' style={{ transform: 'translate(0,2px)', userSelect: 'none', }} onClick={this.toStar}>
                        <StarOutlined style={{
                            marginRight: '4px',
                            fontSize: '16px',
                            color: this.state.hasStared ? '#409EFF' : '',
                        }} /> {this.state.starNum}
                    </span>
                    <Tooltip className='css-15aa6sn-OperationLink' color={'white'} title={() => {
                        return (<span onClick={()=>{alert('举报')}} style={{ color: 'rgb(38,38,38)',fontSize:'12px',cursor:'pointer' }}>举报</span>)
                    }} placement="right">
                        <EllipsisOutlined style={{
                            fontSize: '16px',
                            transform: 'translate(0,2px)',
                            fontWeight: 'bolder'
                        }} />
                    </Tooltip>
                </div>
            </div>
        );
    }
}

export default DisItem;
