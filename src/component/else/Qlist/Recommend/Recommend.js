import React, { Component } from 'react';
import TopSwipperBtn from '../../TopSwipperBtn/TopSwipperBtn';
import Carosel from '../../Carosel/Carosel';
class Recommend extends Component {
    carosel = React.createRef();
    state = {
        scrollRight:null,
        scrollLeft:null,
    }
    componentDidMount(){
        this.setState({
            scrollRight:()=>{
                let {scrollWidth} = this.carosel.current;
                console.log(scrollWidth);
                this.carosel.current.scrollTo(scrollWidth,0)
            },
            scrollLeft:()=>{
                console.log(this.carosel.current.scrollTo)
                this.carosel.current.scrollTo(0,0);
            },
        })
    }
    render() {
        return (
            <div className='q-page-recommend'>
                <TopSwipperBtn scrollRight = {this.state.scrollRight} scrollLeft = {this.state.scrollLeft}/>
                <Carosel carosel={this.carosel}/>
            </div>
        );
    }
}
export default Recommend;
