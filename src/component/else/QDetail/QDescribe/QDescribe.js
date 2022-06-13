import { LeftOutlined, LikeOutlined, RightOutlined, StarOutlined, UnorderedListOutlined } from '@ant-design/icons';
import React, { Component, useState } from 'react';
import MyGap from '../../MyGap/MyGap';
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import './QDescribe.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button, Drawer } from 'antd';
import QlistInner from '../QlistInner/QlistInner';
const selectBox = {
    height: '46px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px',
    paddingRight: '20px',
    color: 'rgba(255, 255, 255, 0.65)',
    background: 'white',
    borderLeft: '.5px solid white',
    marginLeft: '-.5px',
    justifyContent: 'space-between',
}
class QDescribe extends Component {
    render() {
        return (
            <div>
                <QDescribeHead />
                <QDescribeContent />
                <QDescribeBottom />
            </div>

        );
    }
}
function QDescribeHead() {
    const [isLike, setLike] = useState(false);
    const [isStar, setStar] = useState(false);
    return (
        <div className="QDescribeHead css-xfm0cl-Container">
            <h4 className="css-10c1h40-Title eugt34i1">1. 两数之和</h4>
            <div className='css-1e1vffy-Tools'>
                难度 <span className='css-green'>简单</span> <MyGap gap={7} />
                <LikeOutlined onClick={() => { setLike(!isLike) }} style={{ color: isLike ? '#409EFF' : '' }} /><MyGap gap={5} /><span className='hover-grey'>11000</span><MyGap gap={7} />
                <StarOutlined onClick={() => { setStar(!isStar) }} style={{ color: isStar ? '#409EFF' : '' }} /><MyGap gap={5} /><span className='hover-grey'>收藏</span><MyGap gap={7} />
            </div>
        </div>
    )
}


function QDescribeContent() {
    const mdText =
        `
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

示例 1：

~~~js
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
~~~

示例 2：

~~~js
输入：nums = [3,2,4], target = 6
输出：[1,2]
~~~

示例 3：
~~~js
输入：nums = [3,3], target = 6
输出：[0,1]
~~~

提示：

*	2 <= nums.length <= 104
*   -109 <= nums[i] <= 109
*   -109 <= target <= 109
*   只会存在一个有效答案

进阶: 你可以想出一个时间复杂度小于 O(n2) 的算法吗？
`;

    const components = {
        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
                <SyntaxHighlighter
                    showLineNumbers={true}
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag='div'
                    {...props}
                >
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
            );
        }
    }
    return (
        <div className='md-render-wrapper'>
            <ReactMarkdown components={components} children={mdText} remarkPlugins={[gfm]} className="markdown-html" />
        </div>
    )
}
function QDescribeBottom() {
    return (
        <div className="css-dhjq4w-Submission e1oinl1z0">
            <span className="css-16xftbw-Type e1oinl1z2">通过次数</span>
            <span className="css-1ne6r7t-Count e1oinl1z3">3,470,221</span>
            <div className="css-1vr2lla-Separator e1oinl1z1"></div>
            <span className="css-16xftbw-Type e1oinl1z2">提交次数</span>
            <span className="css-1ne6r7t-Count e1oinl1z3">6,599,515</span>
        </div>
    )
}
export function QBottom() {
    const [visible, setVisible] = useState(false);
    return (
        <div style={selectBox} className='q-des-bottom'>
            <Button onClick={() => { setVisible(true) }}><UnorderedListOutlined /> 题目列表</Button>
            <div>
                <Button><LeftOutlined /> 上一题</Button>
                <span className='q_index'>890/2668</span>
                <Button>下一题 <RightOutlined /></Button>
            </div>
            <Drawer width={500} drawerStyle={{ backgroundColor: 'rgb(38,38,38)' }} placement='left' visible={visible} onClose={() => { setVisible(false) }} closable={false} >
                <QlistInner/>                
            </Drawer>
        </div>
    )
}


export default QDescribe;
