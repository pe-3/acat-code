import React, { Component } from 'react'
import { Menu, Input } from 'antd'
const { TextArea } = Input
export default class Qconsole extends Component {
    menulist = [
        { label: '测试用例', key: 'example' },
        { label: '代码执行结果', key: 'result' },
    ]
    render() {
        return (
            <div className='Qconsole'>
                <Menu items={this.menulist} theme='dark' mode='horizontal' />
                <div style={{ padding: '20px' }}>
                    <TextArea  placeholder='输入测试用例' style={{height:'calc(200px - 40px - 46px)'}}/>
                </div>
            </div>
        )
    }
}
