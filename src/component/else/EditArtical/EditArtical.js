import React, { Component, useState } from 'react'
import Editor from '../Editor/Editor'
import './EditArtical.css'
import { languages } from '@codemirror/language-data';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { MdRender } from '../QDetail/QDescribe/QDescribe';
import { Button, Input, Tag } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
export default class EditArtical extends Component {
    state = {
        text: '### 在右侧区域编辑你的md文档',

    }
    render() {
        return (
            <div>
                <EditArticalHead />
                <div className='EditArtical'>
                    <div style={{ background: 'white', padding: '10px', }}>
                        <MdRender text={this.state.text} />
                    </div>
                    <div style={{ width: '50vw', overflow: 'auto' }}>
                        <Editor codeChange={(val) => {
                            this.setState({
                                text: val,
                            })
                        }} code={this.state.text} height='calc(100vh - 100px)' extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]} />
                    </div>
                </div>
            </div>
        )
    }
}


function EditArticalHead() {
    let [tags, setTags] = useState([]);
    let [tag, setTag] = useState('');
    const addTag = () => {
        if(!tag){
            return alert('请输入标签内容');
        }
        if (tags.indexOf(tag) !== -1) {
            return alert('标签重复');
        }
        if (tags.length >= 6) {
            return alert('标签个数上限');
        }
        setTags([...tags, tag]);
        setTag('');
    };
    return (
        <div className='EditArticalHead'>
            <div>
                <Input placeholder='此处输入标题...' />
            </div>
            <div style={{ display: 'flex', marginLeft: '40px', alignItems: 'center' }}>
                <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
                    <Input.Group compact style={{ width: '30%' }}>
                        <Input onPressEnter={addTag} style={{ width: '100px' }} placeholder='添加标签' value={tag} onChange={(e) => { setTag(e.target.value) }} />
                        <Button style={{ background: 'rgb(45,181,93)', color: 'white' }} onClick={addTag}><PlusOutlined /></Button>
                    </Input.Group>
                    <div style={{ flex: '1', height: '50px', overflow: 'auto', lineHeight: '50px', }}>
                        {tags.map((val, i) => {
                            return <Tag closable onClose={() => {
                                let newTags = tags.filter((value) => {
                                    return value != val;
                                })
                                setTags(newTags);
                            }} key={val} >{val}</Tag>
                        })}
                    </div>
                </div>
                <Button style={{ color: 'rgb(45,181,93)' }}>取消 </Button>
                <Button style={{ background: 'rgb(45,181,93)', color: 'white', marginLeft: '10px' }}>发起讨论</Button>
            </div>
        </div >
    )
}