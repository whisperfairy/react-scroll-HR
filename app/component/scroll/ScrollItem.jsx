/**
 * Created by hurong on 2016/11/24.
 */

'use strict'
import React, {PureComponent} from 'react'

class ScrollItem extends PureComponent {


    constructor(props) {
        super(props);
        console.log('ScrollItem ' + 'constructor' + arguments);
        this.status=true;
        this.update=false;
    }

    componentWillMount() {
        console.log('ScrollItem ' + ' componentWillMount' + arguments);

    }

    componentDidMount() {
        console.log('ScrollItem ' + ' componentDidMount' + arguments);
        if(this.props.currentScrollTop+this.props.triggerTop>this.item.offsetTop)
        {   this.status=false;
            this.props.triggerFunction();
        }
    }

    componentWillReceiveProps(nextprops) {
        console.log('ScrollItem' + ' componentWillReceiveProps' + arguments);
        if(nextprops.currentScrollTop+parseInt(nextprops.triggerTop)>this.item.offsetTop&&this.status)
        {
            this.props.triggerFunction();
            this.status=false;
            this.update=true
        }
    }

    shouldComponentUpdate(nextprops,nextstate) {
        console.log('ScrollItem ' + ' shouldComponentUpdate' + arguments);
        const{nextcurrentScrollTop,...args}=nextprops;
        const{oldcurrentScrollTop,...oldargs}=this.props;
        if (args!==oldargs)
        {
            return true;
        }
        else return this.update;
    }

    componentWillUpdate() {
        console.log('ScrollItem' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('ScrollItem' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('ScrollItem' + ' componentWillUnmount' + arguments);
    }

    render() {
        console.log('ScrollItem' + 'rendering');
        this.update=false;
        return (
            <div ref={(ref)=>{
                this.item=ref
            }}>

                {React.Children.map(this.props.children,(child)=>
                {
                   return (child);
                })}
            </div>
        )
    }
}
export default ScrollItem;