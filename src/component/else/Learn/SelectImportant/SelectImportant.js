import React, { Component } from 'react'
import './SelectImportant.css'
import {ExclamationOutlined} from '@ant-design/icons'
export default class SelectImportant extends Component {
    state = {
        isSelected: false,
    }
    render() {
        let { isSelected } = this.state;
        let { onSelectChange } = this.props;
        return (
            <div className='SelectRadio' style={{ backgroundColor: isSelected ? 'grey' : '',...this.props.style}} onClick={() => {
                let { isSelected } = this.state;
                isSelected = !isSelected;
                this.setState({
                    isSelected,
                })
                if (onSelectChange) {
                    onSelectChange(isSelected);
                }
            }}>
                {this.state.isSelected ? <ExclamationOutlined style={{ fontSize: '8px' }} /> : ''}
            </div>
        )
    }
}
