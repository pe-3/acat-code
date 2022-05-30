import React, { Component } from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import './Menus.css'
 class MenuList extends Component {
    static defaultProps = {
        list: [
        ]
    }
    state = { seletIndex: null, }
    render() {
        let { jump, pathname,list } = this.props;
        return (
            <div className='Menus'>
                <ul>
                    {list.map((val, index) => {
                        return (
                            <li key={index} className={pathname === val.path ? 'selectMenu selectItemName' : ''} onClick={() => { jump(val.path); }} style= {val.style}>
                                <i className={`iconfont icon-${val.icon} menu-icon`}></i>
                                {val.content}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}   
function Menu(props){
    let history = useNavigate();
    let jump = (path)=>{
        history(path);
    }
    let location = useLocation();
    return (
        <MenuList jump={jump} pathname = {location.pathname} {...props}/>
    )
}

export default Menu