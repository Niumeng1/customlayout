import React, { Component } from 'react'
import reactable from 'reactablejs'
import Mycharts from './mycharts'
import Mytext from './mytext';
import './MyCompenent.css';
import Mymap from './Mymap'
import PropTyps from 'prop-types';

class Child1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width:this.props.xwidth,
      xwidth: 0
    }
  }

  render() {
    {
      console.log('step3>'+this.props.xwidth)
      
  }
    {
      const childXWidth = parseInt(this.props.xwidth);
      
      console.log('step4>'+typeof childXWidth)
      
        return (
          <div
            style={{
              fontSize: '30px',
              position: 'relative',
              left: this.props.x,
              top: this.props.y,
              width:  childXWidth ,
              height: this.props.height,
              borderWidth: '1px',
              borderStyle: 'dashed',
              borderColor: 'red',
              background: '',
              transform: `rotate(${this.props.angle}deg)`,
            }}
            ref={this.props.getRef}
          ></div>
        )
      

    }
    
  }
}

const ReactableChild = reactable(Child1)

class MyComponent extends Component {
  constructor(props) {
    super(props);
    console.log('step0>' + typeof this.props.obj.myborderObj.width);
    this.state = {
      x: this.props.obj.myborderObj.x,
      y: this.props.obj.myborderObj.y,
      width: this.props.obj.myborderObj.width,
      height: this.props.obj.myborderObj.height,
      angle: this.props.obj.myborderObj.angle,
      xLeft: 15,
      xTop: 10,
      xWidth: 450,
      xHeight: 450
    };

    console.log('>>>!' + this.state)
  }
  changeControlPanelStyle = (e) => {
    console.log(`myconpenent>`)
  }
  //doubled= false;
  handleDragMove = (e) => {

    const { dx, dy } = e;
    // console.log(`${dx}: ${dy}`)
    this.setState({
      x: this.state.x + dx,
      y: this.state.y + dy,
      xLeft: this.state.xLeft + dx,
      xTop: this.state.xTop + dy
    })
  }
  handleGestureMove = (e) => {
    const { da } = e
    // console.log(da)
    this.setState(state => ({
      angle: state.angle + da
    }))
  }
  handleResizeMove = (e) => {
    this.props.handleResizeMove(e);
    // console.log(`重置大小:${e.rect.width}`)
    // const { width, height } = e.rect
    // const { left, top } = e.deltaRect
    // this.setState(state => {
    //   return {
    //     x: state.x + left,
    //     y: state.y + top,
    //     width,
    //     height,
    //     xLeft: state.xLeft + left,
    //     xTop: state.xTop + top,
    //     xWidth: width - 60,
    //     xHeight: height - 60
    //   }
    // })
  }

  onRemoveItem() {
    //console.log(this.props)
    this.props.del(this.props.delIndex);
  }

  // handleContextMenu = (e)=>{
  //   console.log
  // }
  changeControlPanelStyle(obj) {
    console.log(`myconpenent> ${obj}`)
    this.props.changeControlPanelStyle(obj)
  }
  // componentWillUpdate(){
  //   console.log('componentWillUpdate');
  //   this.changeControlPanelStyle(this.props.obj)
  // }
  render() {

    return (
      <div className="grid-item">
        <span className='remove'
          style={{ left: this.state.xLeft + 'px', top: this.state.xTop + 'px', width: '10px' }}
          onClick={this.onRemoveItem.bind(this)}
        >x</span>

        <ReactableChild
          draggable
          gesturable
          resizable={{
            edges: { left: true, right: true, bottom: true, top: true },
          }}
          onDragMove={this.handleDragMove}
          onGestureMove={this.handleGestureMove}
          onResizeMove={this.handleResizeMove}
          onContextMenu={this.handleContextMenu}
          xwidth={this.props.obj.myborderObj.width}
          {...this.state}
        >

        </ReactableChild>
        <Mycharts
          xLeft={this.state.xLeft}
          xTop={this.state.xTop}
          xWidth={this.props.obj.myborderObj.width}
          xHeight={this.state.xHeight}
        />
        {/* <Mytext xLeft={this.state.xLeft}
            xTop= {this.state.xTop}
            xWidth={this.state.xWidth}
            xHeight={this.state.xHeight}/> */}

        {/* <Mymap 
               xLeft={this.state.xLeft}
               xTop= {this.state.xTop}
               xWidth={this.state.xWidth}
               xHeight={this.state.xHeight}
            /> */}
      </div>
    )
  }
}

export default MyComponent;
