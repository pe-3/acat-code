import React, { Component } from 'react'
import './QBottom.css'
import { Pagination } from 'antd';

const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
};
export default class QBottomBar extends Component {
    state = {
        pageSize: '20 条/页',
    }
    changeState = (propName) => {
        return (val) => {
            this.setState({
                [propName]: val,
            })
        }
    }
    render() {
        return (
            <div className='QBottom'>
                <Pagination
                    showSizeChanger
                    onShowSizeChange={onShowSizeChange}
                    defaultCurrent={3}
                    total={500}
                />
            </div>
        )
    }
}




