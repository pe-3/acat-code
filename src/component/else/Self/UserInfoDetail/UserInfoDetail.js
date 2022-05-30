import React, { Component } from 'react'
import Editbtn from '../Editbtn/Editbtn';
import './this.css'
export default class UserInfoDetail extends Component {
    static defaultProps = {
        nickname: '拔刀不为斩',
        sex: 'boy',
        realName: '',
        majorClass: '软件2003',
        birthday: '2002-02-05',
        student_num: '04203024',
        email: '738282662@qq.com',
        avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202103%2F30%2F20210330141929_161cb.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652842290&t=527c7920901fdf8db3af9cc4edc5b273',
        signature: '刚子的自我独白',
        phoneNum: '',
    }
    render() {
        let {
            nickname,
            realName,
            majorClass,
            birthday,
            student_num,
            email,
            avatar,
            signature,
            sex,
            phoneNum
        } = this.props;

        return (
            <div className='userInfoDetaio'>
                <div className='top-wrapper'>
                    <div className="info-wrapper">
                        <p className='nick-name'>
                            <span>{nickname}</span>
                            {sex === 'boy' ?
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="sex-icon"><path fillRule="evenodd" d="M17.022 5.564h-2.586a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V6.978L16.17 9.243a7.001 7.001 0 01-10.557 9.143 7 7 0 019.143-10.557l2.265-2.265zM14.1 9.9a5 5 0 10-7.071 7.072 5 5 0 007.07-7.072z" clipRule="evenodd"></path></svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="sex-icon girl"><path fillRule="evenodd" d="M13 15.93V17h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H9a1 1 0 110-2h2v-1.07A7.001 7.001 0 0112 2a7 7 0 011 13.93zM12 14a5 5 0 100-10 5 5 0 000 10z" clipRule="evenodd"></path></svg>
                            }
                        </p>
                        <p className='info-else'>
                            <span>真实姓名
                                <span className='info-val'>{realName ? realName : '--'}</span>
                            </span>
                            <span>专业班级
                                <span className='info-val'>{majorClass ? majorClass : '--'}</span>
                            </span>
                            <span>生日
                                <span className='info-val'>{birthday ? birthday : '--'}</span>
                            </span>
                        </p>

                    </div>
                    <div className="info-avatar">
                        <img src={avatar} alt="头像" />
                    </div>
                </div>
                <p className='info-more'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" ><path fillRule="evenodd" d="M7 2h10a3 3 0 013 3v14a3 3 0 01-3 3H7a3 3 0 01-3-3V5a3 3 0 013-3zm0 2a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H7zm3 13h4a1 1 0 110 2h-4a1 1 0 110-2z" clipRule="evenodd"></path></svg>
                        <span className='info-val'>{phoneNum ? phoneNum : '--'}</span>
                    </span>
                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" ><path fillRule="evenodd" d="M21.927 6.124a.996.996 0 01.069.47c.003.052.004.104.004.156v10.5c0 1.521-1.264 2.75-2.8 2.75H4.8C3.264 20 2 18.771 2 17.25V6.75c0-.052.002-.104.004-.156a.996.996 0 01.07-.47C2.363 4.905 3.481 4 4.8 4h14.4c1.318 0 2.436.905 2.727 2.124zm-2.229.042A.824.824 0 0019.2 6H4.8a.824.824 0 00-.498.166L12 11.298l7.698-5.132zM20 8.369l-7.445 4.963a1 1 0 01-1.11 0L4 8.37v8.881c0 .404.356.75.8.75h14.4c.444 0 .8-.346.8-.75V8.369z" clipRule="evenodd"></path></svg>
                        <span className='info-val'>{email ? email : '--'}</span>
                    </span>
                    <span>学号
                        <span className='info-val'>{student_num ? student_num : '--'}</span>
                    </span>
                </p>
                <p className='signature2'>
                    自我介绍：<span>{signature}</span>
                </p>
                <Editbtn className='edit-position'/>
            </div>
        )
    }
}
