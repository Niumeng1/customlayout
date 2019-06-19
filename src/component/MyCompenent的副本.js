import React,{Component} from 'react'
import reactable from 'reactablejs'
import Mycharts from './mycharts'
import Mytext from './mytext';
import  './MyCompenent.css';
import Mymap from './Mymap'
// var State = {
//   x: Number,
//   y: Number,
//   width: Number,
//   height: Number,
//   angle: Number
// }

const Child = (props) => (
  
  <div
    style={{
      fontSize: '30px',
      position: 'relative',
      left: props.x,
      top: props.y,
      width: props.width,
      height: props.height,
      borderWidth: '1px',
      borderStyle: 'dashed',
      borderColor: 'red',
      background: '',
      transform: `rotate(${props.angle}deg)`,
    }}
    ref={props.getRef}
  >
 
  </div>
)
class Child1 extends Component{
   constructor(props){
     super(props);
      
   }
   changeControlPanelStyle(obj){
      console.log('asda'+this.props.changeControlPanelStyle(obj))
   }
   componentWillUpdate(){
     
   }
   render(){
      console.log(this.props.xwidth)
     return (
      <div
      style={{
        fontSize: '30px',
        position: 'relative',
        left: this.props.x,
        top: this.props.y,
        width: this.props.xwidth,
        height: this.props.height,
        borderWidth: '1px',
        borderStyle: 'dashed',
        borderColor: 'red',
        background: '',
        transform: `rotate(${this.props.angle}deg)`,
      }}
      ref={this.props.getRef}
    >
   
    </div>
     )
   }
}
// MyComponent will get getRef in props, put getRef to the element you want interact, then you can use all options and event handlers on Reactable

const ReactableChild = reactable(Child1) 

class MyComponent extends Component{
    constructor(props){
      super(props);
      console.log('>>>'+this.props.obj.myborderObj.x);
      this.state= {
          x: 0,
          y: 0,
          width: this.props.width || 450,
          height: 510,
          angle: 0,
          xLeft:15,
          xTop:10,
          xWidth:450,
          xHeight:450
      };
      console.log('>>>!'+this.state)
    }
    //doubled= false;
    handleDragMove= (e)=>{
      
      const {dx, dy}=e;
     // console.log(`${dx}: ${dy}`)
      this.setState({
        x: this.state.x+ dx,
        y: this.state.y+ dy,
        xLeft: this.state.xLeft +dx,
        xTop: this.state.xTop+ dy
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
      //console.log(`重置大小:${e.deltaRect.left}`)
      const { width, height } = e.rect
      const { left, top } = e.deltaRect
      this.setState(state => {
        return {
          x: state.x + left,
          y: state.y + top,
          width,
          height,
          xLeft: state.xLeft +left,
          xTop: state.xTop + top,
          xWidth: width - 60,
          xHeight: height -60
        }
      })
    }

    onRemoveItem(){
      //console.log(this.props)
      this.props.del(this.props.delIndex);
    }

    // handleContextMenu = (e)=>{
    //   console.log
    // }
    changeControlPanelStyle(obj){
      console.log(`myconpenent> ${obj}`)
      this.props.changeControlPanelStyle(obj)
    }
    // componentWillUpdate(){
    //   console.log('componentWillUpdate');
    //   this.changeControlPanelStyle(this.props.obj)
    // }
    render(){
    
      return (
        <div  className="grid-item">
        <span className='remove' 
        style={{left:this.state.xLeft+'px',top:this.state.xTop+'px',width:'10px'}} 
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
          xwidth={this.props.width}
          {...this.state}
        >
          
         </ReactableChild>
         <Mycharts
            xLeft={this.state.xLeft}
            xTop= {this.state.xTop}
            xWidth={this.state.xWidth}
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
