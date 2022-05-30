import React, { Component } from 'react';
import './Carosel.css';

class Carosel extends Component {
    pics = [
        require('../../../assets/img/CaroselPic/1627272831-qrCJvb-递归和分治.webp'),
        require('../../../assets/img/CaroselPic/1632986689-LSNdvL-2d9508fc55133f34cee858154875cb32.webp'),
        require('../../../assets/img/CaroselPic/1646910868-wkWFEj-概率题面试突击.webp'),
        require('../../../assets/img/CaroselPic/1653042470-OXMNGC-20220520-131704.webp'),
        require('../../../assets/img/CaroselPic/1653884353-vkNXAm-侧边栏广告.webp'),
    ]

    render() {
        return (
            <div className='Carosel' ref={this.props.carosel}>
                {this.pics.map((val,i)=>{
                    return <img src={val} alt="照片" key={i}/>
                })}
            </div>
        );
    }
}

export default Carosel;
