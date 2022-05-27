import React from "react";
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