import React, { Component } from 'react'
import SingleTask from '../SingleTask/SingleTask'
import { Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
export default class Tasks extends Component {
    state = {
        length: 0,
        map: Array.prototype.map,
    }
    push = (obj) => {
        let { length } = this.state;
        this.setState({
            [length]: obj,
            length: length + 1,
        })
    }
    componentDidMount() {
        let list = [{}, {}, {}, {}, {}];
        for (let i in list) {
            this.setState({
                [i]: list[i],
                length: i + 1,
            })
        }
    }
    render() {
        return (
            <div className='Tasks'>
                {
                    this.state.map((val, i) => {
                        return <SingleTask {...val} key={i} />
                    })
                }
                <div className="pos_bottom" style={{ width: "97%", }} >
                    <Input prefix={<PlusOutlined  style={{color:'white'}}/>} size='large' placeholder='添加任务' id='addTask' style={{background:'rgba(38,38,38,.6)'}}/>
                </div>
            </div>

        )
    }
}
