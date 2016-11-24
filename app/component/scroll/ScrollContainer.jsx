/**
 * Created by hurong on 2016/11/24.
 */

'use strict'
import React, {PureComponent} from 'react'
import './ScrollContainer.scss'
class ScrollContainer extends PureComponent {



    constructor(props) {
        super(props);
        console.log('ScrollContainer ' + 'constructor' + arguments);
        this.state={
            currentScrollTop:0
        };
        this.currentAnchor=0;
    }

    componentWillMount() {
        console.log('ScrollContainer ' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('ScrollContainer ' + ' componentDidMount' + arguments);
        this.anchor=[];
        for (let i=0 ;i< this.container.children.length;i++)
        {
            this.anchor.push(this.container.children[i].offsetTop);
        }
    }

    componentWillReceiveProps() {
        console.log('ScrollContainer' + ' componentWillReceiveProps' + arguments);
    }

    shouldComponentUpdate() {
        console.log('ScrollContainer ' + ' shouldComponentUpdate' + arguments);
        return true;
    }

    componentWillUpdate() {
        console.log('ScrollContainer' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('ScrollContainer' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('ScrollContainer' + ' componentWillUnmount' + arguments);
    }

    render() {
        let _=this;
        console.log('ScrollContainer' + 'rendering');
        return (
            <div ref={(ref)=>{
                this.container=ref;
            }} className="hr-scroll-container" onScroll={()=>{
                console.log('hello');
                this.setState({currentScrollTop:this.container.scrollTop})
            }}>
                {React.Children.map(this.props.children,(child)=>
                {
                    return( React.cloneElement(child,{
                        currentScrollTop:this.state.currentScrollTop
                    }))
                })}
            </div>
        )
    }
}
export default ScrollContainer;