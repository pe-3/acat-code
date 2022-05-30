import './Skills.css'
import React, { Component } from 'react';
import Editbtn from '../Editbtn/Editbtn';

class Skills extends Component {
    static defaultProps = {
        websiteArr: [
            'pw-1.gitee.io',
            'pe-2.github.io',
        ],
        skills: [
            'C',
            'HTML',
            'CSS',
            'JavaScript'
        ],
    }
    render() {
        return (
            <div className='Skills'>
                <p className='Skills-title'>
                    <span className='label'></span>
                    个人网站及技能
                </p>
                <div className="css-7yjanw-Title">
                    个人网站
                </div>
                {this.props.websiteArr.map((val, i) => {
                    return (<p key={i} className='css-1kcznup-LinkWrap'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" ><path fillRule="evenodd" d="M13 7a1 1 0 011-1h2a6 6 0 010 12h-2a1 1 0 110-2h2a4 4 0 000-8h-2a1 1 0 01-1-1zm-3 10a1 1 0 01-1 1H8A6 6 0 018 6h1a1 1 0 010 2H8a4 4 0 100 8h1a1 1 0 011 1zm-1-6h6a1 1 0 110 2H9a1 1 0 110-2z" clipRule="evenodd"></path></svg>
                        {val}
                    </p>)
                })}
                <div className="css-7yjanw-Title">
                    技能标签
                </div>
                <p>
                    {this.props.skills.map((val, i) => {
                        return <span className='css-1q2wjfz-BasicTag ' key={i}>{val}</span>
                    })}
                </p>
                <Editbtn className='edit-position'/>
            </div>
        );
    }
}

export default Skills;
