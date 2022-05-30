import './Educate.css'
import React, { Component } from 'react';
import Editbtn from '../Editbtn/Editbtn'
class Educate extends Component {
    static defaultProps = {
        school: '西安邮电大学',
        major: '网络工程',
        type: '统招',
    }
    render() {
        let {
            school,
            major,
            type,
        } = this.props;
        return (
            <div className='Educate'>
                <p className='Educate-title'>
                    <span className='label'></span>
                    教育经历
                </p>
                <div className="Educate-content">
                    <p className='school'>{school}</p>
                    <p className='edu-else'>{major}<span className="grey-label"></span>{type}</p>
                    <Editbtn className='edit-position edu-edit'/>
                </div>
            </div>
        );
    }
}

export default Educate;
