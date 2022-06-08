import React, { Component } from 'react';
import { LikeOutlined } from '@ant-design/icons'
import './Like.css'
class LikeWithAnimation extends Component {
    state = { isClicked: false }
    render() {
        let { likeNum } = this.props;
        return (
            <div className='LikeWithAnimation' onClick={(e) => {
                if (this.state.isClicked) {
                    this.props.cancelLike();
                    this.setState({
                        isClicked: false,
                    })
                    return;
                }
                this.props.addLike();
                this.setState({
                    isClicked: true,
                })
            }}>
                <div className="likeIcon" style={this.state.isClicked ? {
                    backgroundColor: '#01c36c',
                    color: 'white'
                } : {}}>
                    <LikeOutlined className='myLikeIcon'/>
                </div>
                {likeNum ? likeNum : ''}
            </div>
        );
    }
}

export default LikeWithAnimation;
