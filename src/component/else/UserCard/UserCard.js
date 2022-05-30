import React from "react"
import './UserCard.css'
class UserCard extends React.Component {
    
    render() {
        let {hideCard} = this.props;
        let {jump} = this.props;
        return (
            <div id="UserCardCurtain" onClick={()=>{
                hideCard();
            }}>
                <div id='UserCard' onClick={(e)=>{
                    e.stopPropagation();
                }}>
                    <UserInfo jump={jump} hideCard={hideCard}/>
                    <UserMenu />
                    <UserMenuMore jump={jump} hideCard = {hideCard}/>
                </div>
            </div>
        )
    }
}

// 头像昵称
class UserInfo extends React.Component {
    userInfo = {
        avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202103%2F30%2F20210330141929_161cb.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652842290&t=527c7920901fdf8db3af9cc4edc5b273',
        nickName: "用户睿智的昵称",
        sign: "好好学习，天天向上",
    }
    render() {

        return (
            <div id='UserInfo' onClick={()=>{
                this.props.jump('/Self');
                this.props.hideCard();
            }}>
                <div className="userAvatar bigAvatar">
                    <img src={this.userInfo.avatar} alt="" />
                </div>
                <div className="infos">
                    <p className="nickName">{this.userInfo.nickName}</p>
                    <p className="userSign"> <em>签名：</em>{this.userInfo.sign}</p>
                </div>
            </div>
        )
    }
}
//用户菜单
class UserMenu extends React.Component {
    list = [
        {
            icon: require("../../../assets/img/UserMenuIconPic/starred-2e4c5ddcac0ba3a09087d8ff98eff50c.png"),
            menuText: "收藏夹",
        },
        {
            icon: require("../../../assets/img/UserMenuIconPic/notebook-92e90c87d33d7403f2f016c245b203a7.png"),
            menuText: "笔记本",
        },
        {
            icon: require("../../../assets/img/UserMenuIconPic/answer-9dab99b273b399a43f8826c193d187d5.png"),
            menuText: "我的题解",
        },
        {
            icon: require("../../../assets/img/UserMenuIconPic/feedback.6ed8deff.png"),
            menuText: "我的讨论",
        },
        {
            icon: require("../../../assets/img/UserMenuIconPic/progress-106c8d8956a5f08d22006a6ea911e6c3.png"),
            menuText: "做题分析",
        },
        {
            icon: require("../../../assets/img/UserMenuIconPic/session-8dc060863ecf9d6f77c4c9a2963ea6ff.png"),
            menuText: "进度分析",
        },
    ]
    render() {
      
        return (
            <div id='UserMenu'>
                {
                    this.list.map((val, i) => {
                        return (
                            <div className='menuItem' key={i}>
                                <div className="menuIcon">
                                    <img src={val.icon} alt="" />
                                </div>
                                <div className="menutext">{val.menuText}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
//更多菜单
class UserMenuMore extends React.Component {
    list = [
        {
            icon: "icon-gerenziliao",
            text: "个人资料",
            clickHandler:()=>{
                this.props.jump('/Self');
                this.props.hideCard();
            },
            style:{
                cursor:'pointer'
            }
        },
        {
            icon: "icon-dark-full",
            text: "切换主题",
        },
        {
            icon: "icon-tuichu",
            text: "退出",
        },
    ]
    render() {
        return this.list.map((val, i) => {
            return (
                <div className='listMenu' key={i} style={val.style} onClick={val.clickHandler?val.clickHandler:null}>
                    <i className={`iconfont ${val.icon} listIcon`}></i>
                    <span className='listText'>{val.text}</span>
                </div>
            )
        })
    }
}

export default UserCard