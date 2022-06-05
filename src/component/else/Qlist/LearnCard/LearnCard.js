import React, { Component } from 'react';
import './LearnCard.css'
class LearnCard extends Component {
    render() {
        return (
            <div className='LearnCard bg-layer-1 dark:bg-dark-layer-1 hover:bg-fill-2 dark:hover:bg-dark-fill-2 flex h-[60px] items-center rounded-lg p-[10px] shadow-level1'>
                <img src="https://static.leetcode-cn.com/cn-frontendx-assets/production/_next/static/images/icon-study-plan-d9ac428f64fe3787cd9224c67132b8b3.svg" alt="Study plan" className="h-10 w-10"></img>
                <div className="pl-[13px]"><div className="font-medium text-label-1 dark:text-dark-label-1">学习计划广场</div><div className="text-label-3 dark:text-dark-label-3 mt-[2px] text-xs">学习计划广场</div></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="text-label-2 dark:text-dark-label-2 w4 ml-auto h-4"><path fillRule="evenodd" d="M7.913 19.071l7.057-7.078-7.057-7.064a1 1 0 011.414-1.414l7.764 7.77a1 1 0 010 1.415l-7.764 7.785a1 1 0 01-1.414-1.414z" clipRule="evenodd"></path></svg>
            </div>
        );
    }
}

export default LearnCard;
