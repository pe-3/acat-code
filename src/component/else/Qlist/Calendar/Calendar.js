import React, { Component } from 'react'
import './Calendar.css'
export default class Calendar extends Component {
    header = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
    ]
    state = {
        month: this.getMonth(),
        days: [],
        firstDays: [],
        canNext:0,
        year:this.getYear(),
    }
    getDayFirst() {
        let year = this.getYear();
        let month = this.state.month;
        let d = new Date(year, month , 1);
        let b = d.getDay();
        let res = [];
        for (let i = 0; i < b; i++) {
            res.push(i);
        }
        return res;
    }
    getMonth() {
        let date = new Date();
        return date.getMonth();
    }
    getYear(){
        let date = new Date();
        return date.getFullYear();
    }
    getdayNum() {
        let year = this.getYear();
        let month = this.state.month;
        let d = new Date(year, month + 1, 0);
        let a = d.getDate();
        let res = [];
        for (let i = 1; i <= a; i++) {
            res.push(i);
        }
        return res;
    }
    componentDidMount() {
        this.setState({
            days: this.getdayNum(),
            firstDays: this.getDayFirst(),
        });
        this.getDayFirst();
    }
    nextMonth = () => {
        let {canNext,year} = this.state;
        if(canNext === 0){
            return;
        }
        let  {month} = this.state;
        if( month + 1 > 11){
            month = 0;
            this.setState({
                year:year + 1,
            })
        }else{
            month += 1;
        }
        this.setState({
            month:month,
        })
        this.setState({
            days: this.getdayNum(),
            firstDays: this.getDayFirst(),
        })
        canNext --;
        this.setState({
            canNext,
        })
    }
    lastMonth = () => {
        let {canNext,year} = this.state;
        if(canNext >= 11){
            return;
        }
        let  {month} = this.state;
        if( month - 1 < 0){
            month = 11;
            this.setState({
                year:year - 1,
            })
        }else{
            month -= 1;
        }
        this.setState({
            month:month,
        })
        this.setState({
            days: this.getdayNum(),
            firstDays: this.getDayFirst(),
        })
        canNext ++;
        this.setState({
            canNext,
        })
    }
    render() {
        return (
            <div className='Calendar shadow-level1 dark:shadow-dark-level1 bg-layer-1 dark:bg-dark-layer-1 rounded-lg relative mt-[39px] flex flex-col py-2'>
                <div className="flex h-9 items-center py-[6px] pl-[15px]">
                    <div className="min-w-[59px] flex-shrink truncate text-sm font-medium text-label-2 dark:text-dark-label-2">每日 1 题 </div>
                    <div className="ml-3 flex shrink-0 items-center my-ml-3">
                        <button onClick={this.lastMonth} className={`focus:outline-none  dark:text-dark-label-2 " + ${this.state.canNext === 11?'text-label-4':'text-label-2'}`} aria-label="Prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="h-[18px] w-[18px]"><path fillRule="evenodd" d="M14.707 16.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L10.414 12l4.293 4.293z" clipRule="evenodd"></path></svg></button>
                        <button className="focus:outline-none rounded-lg px-[5px] py-0.5 bg-fill-3 dark:bg-dark-fill-3 benyue">本月</button>
                        <button onClick={this.nextMonth} className={`focus:outline-none  dark:text-dark-label-4 " + ${this.state.canNext === 0 ?'text-label-4':'text-label-2'}`} aria-label="Next" disabled=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="h-[18px] w-[18px]"><path fillRule="evenodd" d="M9.293 7.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 12 9.293 7.707z" clipRule="evenodd"></path></svg></button>
                    </div>
                </div>
                <div className="calender-header">
                    {this.header.map((val, i) => {
                        return <span key={i} className='text-label-4 dark:text-dark-label-4 pointer-events-none flex h-[26px] w-8 items-center justify-center'>{val}</span>
                    })}
                </div>
                <div className="calender-content">
                    {
                        this.getDayFirst().map((val, i) => {
                            return <div key={i}></div>
                        })
                    }
                    {
                        this.state.days.map((val, i) => {
                            return <span key={i}>{val}</span>
                        })
                    }
                </div>
            </div>
        )
    }
}
