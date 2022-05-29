import React from 'react';
class ReSelect extends React.Component {
    static defaultProps = {
        type: 'sub',
        data: [
            '@qq.com',
            '@gmail.com',
            '@mail.com',
            '@yahoo.com',
            '@msn.com',
            '@inbox.com',
            '@sina.com',
            '自写后缀'
        ],
        default: '@qq.com',
        hasBorder: false,
        placeholder: '请选择',
        className:'',
    }
    state = {
        showDrop: false,
        selectVal: '@qq.com'
    }
    render() {
        let { type, hasBorder, placeholder, data, selectVal, changeSelect,className } = this.props;
        let { showDrop } = this.state;
        if (!hasBorder) {
            type = '';
        }
        return (
            <div className={`${type}-select re-select ${className}`}>
                <div onClick={() => { this.setState({ showDrop: !showDrop }) }}>
                    {selectVal ? selectVal : placeholder} <i className="icon-xiajiantou iconfont"></i>
                </div>
                {showDrop ? <div className='select-drop-down'>
                    {data.map((val, index) => {
                        return (
                            <div className='selectItem' key={index} onClick={() => {
                                this.setState({
                                    showDrop: !showDrop,
                                })
                                changeSelect(val);
                            }}>
                                <span>{val}</span>
                                {selectVal === val ? <i className='iconfont icon-duihao '></i> : ''}
                            </div>
                        )
                    })}
                </div> : ''}
            </div>
        )
    }
}
class ReInput extends React.Component {
    static defaultProps = {
        style: {
            marginBottom: '16px',
            height: '40px',
        },
        type: 'text',
        placeholder: '请输入内容',
        isShowSelect: false,
        isShowBtn: false,
        selectObj: {
            type: 'sub',
            data: [
                '@qq.com',
                '@gmail.com',
                '@mail.com',
                '@yahoo.com',
                '@msn.com',
                '@inbox.com',
                '@hostmail.com',
                '@sina.com',
                '自定'
            ],
            default: '@qq.com',
            hasBorder: false,
        },
        className:'',
    }
    
    myInput = React.createRef()
    render() {
        let { style, type, placeholder, selectObj, isShowSelect, btnObj, isShowBtn, className } = this.props

        let {
            changeHandler,
            value,
            changeSelect,
            selectVal
        } = this.props;
        let newStyle = {};
        if (selectObj.type === 'pre') {
            newStyle.flexDirection = 'row-reverse';
        }
        return (
            <div className={`re-input ${className}`} style={{ ...style, ...newStyle }}>
                <input type={type} value = {value} onChange={changeHandler} ref={this.myInput} placeholder={placeholder} />
                {isShowSelect ? <ReSelect selectVal={selectVal}  {...selectObj} changeSelect={changeSelect} /> : ''}
                {isShowBtn ? <ReButton {...btnObj} /> : ''}
            </div>
        )
    }
}

class ReButton extends React.Component {
    static defaultProps = {
        style: {
        },
        content: '点击',
        handler: () => {
            console.log('被点击了');
        },
        className:'',
    }
    render() {
        let { style, content, handler, className } = this.props;
        return (
            <div className={`re-button ${className}`} onClick={handler} style={style} >
                {content}
            </div>
        )
    }
}

export { ReSelect, ReInput, ReButton }