import React from 'react';
import SignOrLogin from "../SignOrLogin/SignOrLogin";
import UserCard from "../UserCard/UserCard";
import {useNavigate,useLocation} from 'react-router-dom'
class MenuList extends React.Component {
    list = [
        {
            content: '学习',
            path: '/Learn',
        },
        {
            content: '题库',
            path: '/Qlist',
        },
        {
            content: '讨论',
            path: '/Disscuss',
        },
        {
            content: '竞赛',
            path: '/competition',
        },
    ]


    state = { seletIndex: null, }
    render() {
        let {jump, pathname} = this.props;
        return (
            <div className='MenuList'>
                <ul>
                    <li onClick={() => {  jump('/'); }}>
                        <img src="./assets/img/logo.jpeg" alt="" className="logo" />
                        <span id="itemName" className={pathname === '/' ? "selectItemName" : ''}>ACAT_CODE</span>
                    </li>
                    {this.list.map((val, index) => {
                        return (
                            <li key={index} className={pathname === val.path ? 'selectMenu selectItemName' : ''} onClick={() => { jump(val.path); }}>{val.content}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
function Menu(){
    let history = useNavigate();
    let jump = (path)=>{
        history(path);
    }
    let location = useLocation();
    return (
        <MenuList jump={jump} pathname = {location.pathname}/>
    )
}

function Card(props){
    let {hideCard} = props;
    let history = useNavigate();
    let jump = (path)=>{
        history(path);
    }
    let location = useLocation();
    return (
        <UserCard jump={jump} pathname = {location.pathname} hideCard={hideCard}/>
    )
}

class UserBar extends React.Component {
    state = { isShow: false, isLogged: false }
    hideCard=()=>{
        this.setState({
            isShow:false,
        })
    }
    Logged = () => {
        let { isShow } = this.state;
        return (
            <div className="Logged">
                <i className="iconfont icon-bell-l"></i>
                <i className="iconfont icon-hot"></i>
                <div className="userAvatar" onClick={() => {
                    this.setState({ isShow: !isShow });
                }}>
                    <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202103%2F30%2F20210330141929_161cb.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652842290&t=527c7920901fdf8db3af9cc4edc5b273" alt="" />
                </div>
                {isShow ? <Card hideCard = {this.hideCard}/> : ''}
            </div>
        )
    }
    render() {
        let { isLogged } = this.state;
        let { Logged } = this
        return (
            <div id='UserBar'>
                {isLogged ? <Logged /> : <SignOrLogin />}
            </div>
        )
    }
}
class TopBar extends React.Component {
    render() {
        return (
            <div id='TopBar' className='layout'>
                <Menu/>
                <UserBar />
            </div>
        )
    }
}

export default TopBar