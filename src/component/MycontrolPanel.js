import React, { Component, Fragment } from 'react';
import './MycontrolPanel.css';
import ControlPanelStyle from './ControlPanelStyle'


class MycontrolPanel extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     controlPanelStyle: {
        //         width: 200
        //     },
        //     abc: []
        // }
    }
    changeControlPanelStyle(props){
        this.props.changeControlPanelStyle(props);
    }
    render() {
        return (
            <Fragment>
                <div className="control-panel">
                    <div className="control-panel-header">控制面板头部</div>
                    <div className="control-panel-container">
                        <ControlPanelStyle param={this.changeControlPanelStyle.bind(this)} myborder={this.props.contorlPanelStyle.width}/>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default MycontrolPanel;