import React from "react";
import { ReButton, ReInput, ReSelect } from '../formEle/formEle'
import './this.css'
class Question extends React.Component {
    static defaultProps = {
        state: '完成',
        title: "验证外星词语典",
        answerNum: 20,
        passPossible: "50%",
        difficulty: "简单",
    }
    render() {
        let { state, title, answerNum, difficulty, passPossible } = this.props;
        return (
            <div className="singleQue">
                <span>{state}</span>
                <span>{title}</span>
                <span>{answerNum}</span>
                <span>{passPossible}</span>
                <span>{difficulty}</span>
            </div>
        )
    }
}
class Qlist extends React.Component {
    state = {
        topic: '',
        difficulty: '',
        QState: '',
        tag: '',
    }
    stateChangeHandler = (stateProp) => {
        return (val) => {
            this.setState({
                [stateProp]: val
            })
        }
    }
    list = [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ]
    render() {
        return (
            <div id="Qlist">
                <div className="que-top-bar">
                    <ReSelect className='q-top-select' {...{
                        placeholder: '题单',
                        data: [
                            '剑指offer',
                            '程序猿面试经典'
                        ],
                        changeSelect: this.stateChangeHandler('topic'),
                        selectVal: this.state.topic,
                    }} />
                    <ReSelect className='q-top-select' {...{
                        placeholder: '难度',
                        data: [
                            '简单',
                            '中等',
                            '困难'
                        ],
                        changeSelect: this.stateChangeHandler('difficulty'),
                        selectVal: this.state.difficulty,
                    }} />
                    <ReSelect className='q-top-select' {...{
                        placeholder: '状态',
                        data: [
                            '未开始',
                            '尝试过',
                            '已解答',
                        ],
                        changeSelect: this.stateChangeHandler('QState'),
                        selectVal: this.state.QState,
                    }} />
                    <ReSelect className='q-top-select' {...{
                        placeholder: '标签',
                        data: [
                            '数组',
                            '字符串',
                            '哈希表',
                            '矩阵',
                        ],
                        changeSelect: this.stateChangeHandler('tag'),
                        selectVal: this.state.tag,
                    }} />
                    <ReInput className='q-top-input' placeholder='搜索题目、编号或内容' style={{
                        margin: '0',
                    }} />
                    <ReButton content='随机一题' className='q-top-btn '>
                        <span className="shadow-md flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-b from-fixed-green to-green-s dark:to-dark-green-s shadow-fixed-green">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="text-white"><path fillRule="evenodd" d="M18.48 17.5h-2.204a5 5 0 01-4.31-2.466l-.625-1.061-.624 1.061a5 5 0 01-4.31 2.466H2.661a1 1 0 110-2h3.746a3 3 0 002.586-1.48L10.181 12 8.993 9.98A3 3 0 006.407 8.5H2.661a1 1 0 110-2h3.746a5 5 0 014.31 2.466l.624 1.061.624-1.061a5 5 0 014.31-2.466h2.205V4.315a.5.5 0 01.874-.332l2.536 2.853a1 1 0 010 1.328l-2.536 2.853a.5.5 0 01-.874-.332V8.5h-2.204a3 3 0 00-2.587 1.48L12.501 12l1.188 2.02a3 3 0 002.587 1.48h2.204v-2.185a.5.5 0 01.874-.332l2.83 3.185a.5.5 0 010 .664l-2.83 3.185a.5.5 0 01-.874-.332V17.5z" clipRule="evenodd"></path></svg>
                        </span>
                            随机一题
                    </ReButton>
                </div>
                <div className='Qhead '>
                    <span>状态</span>
                    <span>题目</span>
                    <span>题解</span>
                    <span>通过率</span>
                    <span>难度</span>
                </div>
                {
                    this.list.map((val, i) => {
                        return <Question {...val} key={i} />
                    })
                }
            </div>
        )
    }
}


export default Qlist