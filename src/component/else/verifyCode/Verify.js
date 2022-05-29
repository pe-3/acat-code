import React, { Component } from 'react'
import { ReInput } from '../formEle/formEle';
import './this.css'
export default class Verify extends Component {
    static defaultProps = {
        imgUrl: '',
    }
   
    
    render() {
        let { imgUrl ,verify,changeState} = this.props;
        return (
            <div className='imgWrapper'>
                <img src={imgUrl} alt='人机验证图片' />
                <ReInput placeholder='请输入图片中的字符' changeHandler = {changeState} style={{
                    marginBottom: '16px',
                    height: '40px',
                    marginTop: '16px',
                }} isShowBtn={true} btnObj={
                    {
                        content: '点击以验证',
                        handler: verify
                    }
                } />
            </div>
        )
    }
}
