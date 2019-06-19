import React, { Component } from 'react';

class MyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    onClickAdd(){
        //console.log(`这是子类点击`);
        this.props.onClickAdd();
    }
    render() { 
        return ( 
            <div style={{width:"100%",height:"19vh"}}>
                <button onClick={this.onClickAdd.bind(this)}>添加</button>
            </div>
         );
    }
}
 
export default MyHeader;