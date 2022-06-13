import React, { Component, useState } from 'react';
import './QDetail.css'
import { Menu } from 'antd'
import {
    FileTextOutlined,
    FunnelPlotOutlined,
    FieldTimeOutlined,
    CodeOutlined,
} from '@ant-design/icons'
import Editor from '../Editor/Editor';
import { Select, Drawer, Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons'
import MyGap from '../MyGap/MyGap';
import { useNavigate, useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { QBottom } from './QDescribe/QDescribe';
import Qconsole from './Qconsole/Qconsole';
const selectBox = {
    height: '46px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px',
    paddingRight: '20px',
    color: 'rgba(255, 255, 255, 0.65)',
    background: '#001529',
    borderLeft: '.5px solid white',
    marginLeft: '-.5px',
    justifyContent: 'space-between',
}

class QDetail extends Component {

    state = {
        editorDark: true,
        fontSize: '14px',
        code: '',
        consoleShow: false,
    }
    stateChange = (prop) => {
        return (val) => {
            this.setState({
                [prop]: val,
            })
        }
    }
    render() {
        return (
            <div className='QDetail'>
                <div>
                    <MyMenu />
                    <div className="QDescribe">
                        <Outlet />
                    </div>
                    <QBottom />
                </div>
                <div>
                    <div style={selectBox}>
                        <Select defaultValue='C++' style={{ width: 120 }} options={[
                            { label: 'C++', value: 'C++' },
                            { label: 'python', value: 'python' },
                            { label: 'java', value: 'java' },
                            { label: 'javascript', value: 'javascript' },
                            { label: 'C', value: 'C' },
                            { label: 'C#', value: 'C#' },
                            { label: 'Typescript', value: 'Typescript' },
                        ]} />
                        <SetDrawer changeTheme={this.stateChange('editorDark')} changeFont={this.stateChange('fontSize')} />
                    </div>
                    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
                        <Editor themeDark={this.state.editorDark} code={this.state.code} codeChange={this.stateChange('code')} style={{
                            fontSize: this.state.fontSize,
                        }} />
                        <Drawer placement='bottom' bodyStyle={{ padding: '0' }} drawerStyle={{ background: '#282c34', }} height={200} visible={this.state.consoleShow} closable={false} getContainer={false}
                            style={{ position: 'absolute' }}
                            onClose={() => {
                                this.setState({
                                    consoleShow: false,
                                })
                            }} >
                            <Qconsole />
                        </Drawer>
                    </div>
                    <div style={{ ...selectBox, background: 'white' }}>
                        <div>
                            <Button onClick={() => {
                                let { consoleShow } = this.state;
                                this.setState({
                                    consoleShow: !consoleShow,
                                })
                            }}><CodeOutlined /> 控制台</Button>
                        </div>
                        <div>
                            <Button style={{ color: 'rgb(45,181,93)', backgroundColor: 'white' }}>测试代码</Button>
                            <MyGap />
                            <Button style={{ backgroundColor: 'rgb(45,181,93)', color: 'white' }}>提交</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function SetDrawer(props) {
    const { changeTheme, changeFont } = props;
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    const thems = [
        {
            label: 'light',
            value: false,
        },
        {
            label: 'dark',
            value: true,
        },
    ]
    const fonts = [
        {
            label: '14px',
            value: '14px',
        },
        {
            label: '16px',
            value: '16px',
        },
        {
            label: "18px",
            value: "18px",
        },
    ]
    return (
        <>
            <SettingOutlined className='Set' onClick={showDrawer} />
            <Drawer title="编辑器设置" placement="right" onClose={onClose} visible={visible} closable={false}>
                <div style={{ ...selectBox }}>
                    颜色主题  <Select onSelect={changeTheme} options={thems} defaultValue={true} style={{ width: '100px' }} />
                </div>

                <div style={{ ...selectBox, marginTop: '10px' }}>
                    字体大小  <Select onSelect={changeFont} options={fonts} defaultValue={'14px'} style={{ width: '100px' }} />
                </div>
            </Drawer>
        </>
    );
}
function MyMenu() {
    let history = useNavigate();
    let jump = (path) => {
        history(path);
    }
    let location = useLocation();
    const MenuItems = [
        {
            label: '题目描述',
            key: 'QDescribe',
            icon: <FileTextOutlined />,
        },
        {
            label: '题解&评论',
            key: 'Qcomment',
            icon: <FunnelPlotOutlined />,
        },
        {
            label: '提交记录',
            key: 'Qhistory',
            icon: <FieldTimeOutlined />,
        }
    ]
    return (<Menu items={MenuItems} mode='horizontal' theme='dark' defaultSelectedKeys={location.pathname.split('/')[2]} onSelect={(item) => {
        jump(item.key)
    }} />)
}


export default QDetail;
