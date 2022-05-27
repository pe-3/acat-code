import React from 'react';
import {ReInput,ReButton} from '../formEle/formEle'
class SignOrLogin extends React.Component {
    state = {
        showCard:false,
        isLogin:false,
    }
    switchDisplay = ()=>{
        let {showCard} = this.state;
        this.setState({
            showCard:!showCard,
        })
    }
    switchLog = ()=>{
        let {isLogin} = this.state;
        this.setState({
            isLogin:!isLogin,
        })
    }
    render() {
        return (
            <div className='SignOrLogin'>
                <span className='SignBtn' onClick={()=>{ 
                    this.setState({
                        isLogin:false,
                        showCard:true,
                    })
                }}>注册</span>
                <span>或</span>
                <span className='loginBtn'  onClick={()=>{
                    this.setState({
                        isLogin:true,
                        showCard:true,
                    })
                }}>登录</span>
                {this.state.showCard?<LogCard switchLog={this.switchLog} switchDisplay = {this.switchDisplay} isLogin = {this.state.isLogin}/>:''}
            </div>
        )
    }
}
class LogCard extends React.Component {
    static defaultProps = {
        isLogin:false,
    }
    render() {
        let {isLogin} = this.props;
        return (
            <div className="Curtain">
                <div className="Card">
                    <div className="LogWrapper">
                        <img src={require('../../../assets/img/logo.jpeg')} className='logo log-login' alt='logo pic'/>
                        <span className='PjName selectItemName'>猫扣</span>
                    </div>
                    {!isLogin?<ReInput placeholder='输入邮箱地址' isShowSelect={true} selectObj = {{
                        hasBorder:true,
                        placeholder:"自写后缀",
                    }}/>:
                        (
                            <ReInput placeholder='帐号/邮箱' />
                        )
                    }
                    { !isLogin? <ReInput placeholder='验证码' isShowBtn = {true} btnObj = {{
                        content:"获取验证码"   
                    }}/>:<ReInput placeholder='输入密码' type='password'/>}
                    <ReButton content={!isLogin?'登录/注册':'登录'} style={
                        {
                            height:'40px',
                            lineHeight:'40px',
                            backgroundColor:'rgb(36, 37, 40)',
                            color:'white',
                            borderRadius:'10px',
                            marginBottom:'16px',
                        }
                    }
                        handler = {()=>{
                            alert("登录");
                        }}
                    />
                    <p className='prompt'>
                        <span onClick={this.props.switchLog}>{isLogin?'邮箱注册/验证码登录':'帐号密码登录'}</span>    
                        <span>忘记密码</span>
                    </p>
                    <p className='xieyi'>
                        登录注册即代表同意猫扣 <a href="www.baidu.com">《用户协议》</a> 和 <a href="www.baidu.com">《隐私协议》</a>    
                    </p>
                    <div className='closeBtn' onClick = {this.props.switchDisplay}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path fillRule="evenodd" d="M13.414 12L19 17.586A1 1 0 0117.586 19L12 13.414 6.414 19A1 1 0 015 17.586L10.586 12 5 6.414A1 1 0 116.414 5L12 10.586 17.586 5A1 1 0 1119 6.414L13.414 12z" clipRule="evenodd"></path></svg>    
                    </div>
                </div>
            </div>
        )
    }
}

export default SignOrLogin