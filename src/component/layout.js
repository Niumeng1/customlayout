import React, { Component, Fragment } from 'react';
import MyCompenent from './MyCompenent'
import MycontrolPanel from './MycontrolPanel'

import MyHeader from './header'
class MyLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cptStatistics: 3,
            cptStatisticsList: [], //组件集合
            mycompenentObj: {           //组件当个属性及内容属性
                myborderObj: {           //边框属性
                    x: 0,
                    y: 0,
                    width: this.props.width || 350,
                    height: 510,
                    angle: 0,
                    xLeft: 15,
                    xTop: 10,
                    xWidth: 450,
                    xHeight: 450
                }

            },
            contorlPanelStyle: {    //右侧属性面板
                width: 480
            }
        }
    }
    onClickAdd() {
        this.setState({
            cptStatisticsList: [...this.state.cptStatisticsList, new Date().getTime().toString()]
        }, () => {
            console.log(`这个组合:${this.state.cptStatisticsList}`)
        })
    }
    ondelItem(i) {
        let cptList = this.state.cptStatisticsList;
        cptList.splice(i, 1)
        console.log(`shen: ${cptList}`)
        this.setState({
            cptStatisticsList: cptList
        }, () => {
            console.log(`怎么不对呢:${this.state.cptStatisticsList}`)
        }
        );


    }
    handleResizeMove = (e)=>{
        console.log(`重置大小:${e.rect.width}`)
        const { width, height } = e.rect
        const { left, top } = e.deltaRect
        this.setState(state => {
        return {
            contorlPanelStyle: {
                width
            },
            mycompenentObj:{
                myborderObj:{
                    width
                }
            }
        }
        })
    }
    changeControlPanelStyle(obj) {
        console.log(`这个值：${obj.width}`);
        this.setState(
            {
                contorlPanelStyle: {
                    width: obj.width
                },
                mycompenentObj:{
                    myborderObj:{
                        width:obj.width
                    }
                }
            }
        )
    }
    render() {
        return (
            <Fragment>
                <MyHeader onClickAdd={this.onClickAdd.bind(this)} />
                <div>
                    {
                        this.state.cptStatisticsList.map((item, i) => {
                            return (
                                <div key={item + i}>
                                    <MyCompenent del={this.ondelItem.bind(this)}
                                        delIndex={i}
                                        changeControlPanelStyle={this.changeControlPanelStyle.bind(this)}
                                        handleResizeMove ={this.handleResizeMove}
                                        obj = {this.state.mycompenentObj}
                                        >

                                    </MyCompenent>

                                </div>
                            )

                        })
                    }
                </div>
                <MycontrolPanel changeControlPanelStyle={this.changeControlPanelStyle.bind(this)} contorlPanelStyle={this.state.mycompenentObj.myborderObj}/>

                {/* <DragResize></DragResize> */}
            </Fragment>
        );
    }
}

export default MyLayout;