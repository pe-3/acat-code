import React, { Component } from 'react'
import { javascript } from "@codemirror/lang-javascript"
import CodeMirror from '@uiw/react-codemirror';
import { oneDark } from '@codemirror/theme-one-dark';
export default class Editor extends Component {
    render() {
        return (
            <div>
                <CodeMirror
                    style={this.props.style}
                    value={this.props.code}
                    height="calc(100vh - 96px - 46px)"
                    extensions={[javascript({ jsx: true })]}
                    onChange={this.props.codeChange}
                    theme={this.props.themeDark ? oneDark : undefined}
                />
            </div>
        )
    }
}
