import React, { Component } from 'react';
/*
* 样式面板组件
*/
class ControlPanelStyle extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            width: this.props.param.width || 280
         }
    }
     inputChangeVul(e){
       
        // console.log(this.input.value);
        this.setState({
            width:this.input.value
        })
        this.props.param({width:this.input.value})
    };
    render(){
        {console.log('panStyle>'+this.props.myborder)}
        return(
            <div>
        
            <label htmlFor="Mywidth"> 宽度: </label>
            <input id="Mywidth" value={parseInt(this.props.myborder)} onChange={this.inputChangeVul.bind(this)} ref={(input)=>{this.input=input}}/>
            </div>
        )
    }
}
 
export default ControlPanelStyle;