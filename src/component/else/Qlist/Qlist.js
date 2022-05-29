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
        topic:'',
        difficulty:'',
        QState:'',
        tag:'',
    }
    stateChangeHandler = (stateProp)=>{
        return (val)=>{
            this.setState({
                [stateProp]:val
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
            <div id="Qlist" className='layout'>
                <div className="que-top-bar">
                    <ReSelect className='q-top-select' {...{
                        placeholder: '题单',
                        data: [
                            '剑指offer',
                            '程序猿面试经典'
                        ],
                        changeSelect:this.stateChangeHandler('topic'),
                        selectVal:this.state.topic,
                    }} />
                    <ReSelect className='q-top-select' {...{
                        placeholder: '难度',
                        data: [
                            '简单',
                            '中等',
                            '困难'
                        ],
                        changeSelect:this.stateChangeHandler('difficulty'),
                        selectVal:this.state.difficulty,
                    }} />
                    <ReSelect className='q-top-select' {...{
                        placeholder: '状态',
                        data: [
                            '未开始',
                            '尝试过',
                            '已解答',
                        ],
                        changeSelect:this.stateChangeHandler('QState'),
                        selectVal:this.state.QState,
                    }} />
                    <ReSelect className='q-top-select' {...{
                        placeholder: '标签',
                        data: [
                            '数组',
                            '字符串',
                            '哈希表',
                            '矩阵',
                        ],
                        changeSelect:this.stateChangeHandler('tag'),
                        selectVal:this.state.tag,
                    }} />
                    <ReInput className='q-top-input' placeholder='搜索题目、编号或内容' style={{
                        margin:'0',
                    }} />
                    <ReButton content='随机一题' className='q-top-btn'/>
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