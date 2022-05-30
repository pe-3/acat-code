import React, { Component } from 'react'
import './Editbtn.css'
export default class Editbtn extends Component {
    static defaultProps = {
        className:''
    }
    render() {
        return (
            <button className={"evjpzb00 css-bdk8zz-BaseButtonComponent-Button ery7n2v0 " + this.props.className}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="css-1rhb60f-Svg ea8ky5j0"><path fillRule="evenodd" d="M12 3a1 1 0 110 2H5.778A.778.778 0 005 5.778v12.444c0 .43.348.778.778.778h12.444c.43 0 .778-.348.778-.778V12a1 1 0 112 0v6.222A2.778 2.778 0 0118.222 21H5.778A2.778 2.778 0 013 18.222V5.778A2.778 2.778 0 015.778 3H12zm9.608-.608a2.803 2.803 0 010 3.964l-8.073 8.073a1 1 0 01-.465.263l-3.399.85a1 1 0 01-1.213-1.213l.85-3.4a1 1 0 01.263-.464l8.073-8.073a2.803 2.803 0 013.964 0zm-1.415 2.55a.803.803 0 00-1.135-1.135l-7.877 7.877-.378 1.513 1.513-.378 7.877-7.877z" clipRule="evenodd"></path></svg><span>编辑</span></button>
        )
    }
}
