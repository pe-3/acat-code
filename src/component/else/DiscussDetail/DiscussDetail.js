import React, { Component, useState, createElement } from 'react'
import { Avatar, Button, Comment, Divider, Tag, Tooltip } from 'antd'
import './DiscussDetail.css'
import { EditOutlined, PlusOutlined, BellOutlined, StarOutlined, EllipsisOutlined, SwapOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons'
import { MdRender } from '../QDetail/QDescribe/QDescribe'
import LikeWithAnimation from '../LikeWithAnimation/LikeWithAnimation'
import moment from 'moment'
export default class DiscussDetail extends Component {
    render() {
        return (
            <div className='DiscussDetail layout ' style={{ padding: '0 230px' }}>
                <div className="DiscussDetail_left">
                    <div className="css-vvxhai-layer1-cardStyle-QuestionDetailWrapper">
                        <DiscussDetailHead />
                        <DiscussDetailContent />
                        <DiscussDetailBottom />
                    </div>
                    <DiscussDetailComment />
                </div>
                <div className="DiscussDetail_right">
                    <DiscussDetailInfo />
                </div>
            </div>
        )
    }
}

function DiscussDetailHead() {
    return (
        <div className='DiscussDetailHead'>
            <div style={{ display: 'flex', position: 'relative' }}>
                <Avatar src={require('../../../assets/img/logo.jpeg')} size='small' />
                <h3 style={{ marginLeft: '10px' }}>2022 力扣春招征文｜0402 腾讯 光子工作室后台开发一面
                </h3>
                <Button shape='round' style={{ background: 'rgb(45,181,93)', color: 'white', position: 'absolute', right: '20px' }}><PlusOutlined />关注TA</Button>
            </div>
            <div className='Sub_Time'>
                <span>发起于 2022-04-03</span>
                <span className='dot'></span>
                <span>最近编辑于 2022-05-30</span>
            </div>
        </div>
    )
}

function DiscussDetailContent(props) {
    let { text } = props;
    return (
        <MdRender text={text} useDefault />
    )
}

function DiscussDetailBottom(props) {
    let [likeNum, setLikeNum] = useState(20);
    let [hasStared, setHasStared] = useState(false);
    let [starNum, setStarNum] = useState(10);
    const addLike = () => {
        likeNum++;
        setLikeNum(likeNum);
    }
    const cancelLike = () => {
        likeNum--;
        setLikeNum(likeNum);
    }
    const toStar = () => {
        if (hasStared) {
            starNum--;
            hasStared = !hasStared;
        } else {
            starNum++;
            hasStared = !hasStared;
        }
        setHasStared(hasStared);
        setStarNum(starNum);
    }
    return (
        <div className='DiscussDetailBottom'>
            <div>
                <LikeWithAnimation likeNum={likeNum} addLike={addLike} cancelLike={cancelLike} />
                <span className='css-15aa6sn-OperationLink' style={{ transform: 'translate(0,2px)', userSelect: 'none', }} onClick={toStar}>
                    <StarOutlined style={{
                        marginRight: '4px',
                        fontSize: '16px',
                        color: hasStared ? '#409EFF' : '',
                    }} /> {starNum}
                </span>
                <Tooltip className='css-15aa6sn-OperationLink' color={'white'} title={() => {
                    return (<span onClick={() => { alert('举报') }} style={{ color: 'rgb(38,38,38)', fontSize: '12px', cursor: 'pointer' }}>举报</span>)
                }} placement="right">
                    <EllipsisOutlined style={{
                        fontSize: '16px',
                        transform: 'translate(0,2px)',
                        fontWeight: 'bolder',
                        color: 'rgba(140,140,140, 1)'
                    }} />
                </Tooltip>
            </div>
            <div>
                <Button shape='round' style={{ background: 'rgb(45,181,93)', color: 'white' }}><EditOutlined />回复讨论</Button>
                <Button shape='round' style={{ color: 'rgb(45,181,93)', marginLeft: '10px' }}><BellOutlined /> 接受动态</Button>
            </div>
        </div>
    )
}

function DiscussDetailInfo() {
    const tagStyle = {
        border: 'none',
        borderRadius: '4px',
        color: 'rgb(38,38,38)',
        fontWeight: 'bolder',
    }
    const tags = [
        '面筋',
        '实习',
        '腾讯',
        '2022力扣春招季',
        '推荐',
    ]
    const colors = [
        '#409EFF',
        '#67C23A',
        '#E6A23C',
        '#F56C6C',
        '#909399',
    ]
    return (
        <Card style={{ padding: '10px 20px' }} className='discuss_info_card'>
            <p>
                <span>收藏次数</span>
                <Tag style={tagStyle}>924</Tag>
            </p>
            <p>
                <span>参与人数</span>
                <Tag style={tagStyle}>82</Tag>
            </p>
            <p>
                <span>浏览次数</span>
                <Tag style={tagStyle}>20.1k</Tag>
            </p>
            <Divider />
            <p style={{ marginBottom: '4px' }}>
                <span>相关标签</span>
            </p>
            <div className="dis_tag_wrapper">
                {tags.map((val, i) => {
                    return (
                        <Tag key={i} style={{ ...tagStyle, fontWeight: '400', margin: '4px', color: 'white', background: colors[i % 5] }}>{val}</Tag>
                    )
                })}
            </div>
        </Card>
    )
}

function Card(props) {
    return (
        <div className={"css-vvxhai-layer1-cardStyle-QuestionDetailWrapper " + props.className} style={props.style}>
            {props.children}
        </div>
    )
}

function DiscussDetailComment(props) {
    let [type, setType] = useState('最热');
    return (
        <div>
            <Card className='DiscussDetailComment'>
                <span>共83个回复</span>
                <span style={{ cursor: 'pointer' }} className='switchType' onClick={() => { setType(type === '最热' ? '最新' : '最热') }}>{type}<SwapOutlined /></span>
            </Card>
            <Card style={{ padding: '10px 14px' }}>
                <SingleComment />
            </Card>
        </div>
    )
}

function SingleComment(props) {
    let [likes, setLikes] = useState(10);
    let [isLike, setIsLike] = useState(false);
    const changeLike = () => {
        if (isLike) {
            likes--;
        } else {
            likes++;
        }
        setLikes(likes);
        setIsLike(!isLike);
    }
    const actions = [
        <span onClick={changeLike}>
            {createElement(isLike ? LikeFilled : LikeOutlined)}
            <span className="comment-action">{likes}</span>
        </span>
        ,
        <span >Reply to</span>,
    ];
    let { children } = props;
    return (
        < Comment
            actions={actions}
            author={<a>Han Solo</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully
                    and efficiently.
                </p>
            }
            datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                </Tooltip>
            }
            children={children}
        />
    )
}