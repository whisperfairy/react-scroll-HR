/**
 * Created by whisper on 2016/11/11
 */
'use strict'
import React, {PureComponent} from 'react'
import ScrollContainer from '../component/scroll/ScrollContainer.jsx'
import ScrollItem from '../component/scroll/ScrollItem.jsx'
class App extends PureComponent {
    constructor(props) {
        super(props);
        console.log('App' + 'constructor' + arguments);
        this.state={
            div1show:'green',
            div2show:'red',
            div3show:'blue'
        }
    }

    componentWillMount() {
        console.log('App' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('App' + ' componentDidMount' + arguments);
    }

    componentWillReceiveProps() {
        console.log('App' + ' componentWillReceiveProps' + arguments);
    }

    shouldComponentUpdate() {
        console.log('App' + ' shouldComponentUpdate' + arguments);
        return true;
    }

    componentWillUpdate() {
        console.log('App' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('App' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('App' + ' componentWillUnmount' + arguments);
    }

    render() {
        console.log('App' + 'rendering');
        return (
            <div>
                <ScrollContainer>
                    <ScrollItem key="0" triggerTop="100" triggerFunction={()=>{
                        this.setState({div1show:'blue'})
                    }}>
                        <div className="red" >
                            <div className={"content"+" "+this.state.div1show}>
                            content
                        </div></div>
                    </ScrollItem>
                    <ScrollItem key="1" triggerTop="100" triggerFunction={()=>{
                        this.setState({div2show:'blue'});
                    }}>
                        <div className="red" >
                            <div className={"content"+" "+this.state.div2show}>
                                content
                            </div></div>
                    </ScrollItem>
                    <ScrollItem key="2" triggerTop="100" triggerFunction={()=>{
                        this.setState({div3show:'red'})
                    }}>
                        <div className="red" >
                            <div className={"content"+" "+this.state.div3show}>
                                content
                            </div></div>
                    </ScrollItem>
                </ScrollContainer>
            </div>
        )
    }
}

export default (App);