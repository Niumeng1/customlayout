import React, { Component } from 'react';

import ReactEcharts from 'echarts-for-react';
import { getBarChart } from "../utils/chart";
class Mycharts extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            
            <div style={{ position: "absolute", width: this.props.xWidth+'px', height: this.props.xHeight+'px',left:this.props.xLeft+'px',top:this.props.xTop+'px' }}>
                <ReactEcharts
                    option={getBarChart()}
                    notMerge={true}
                    lazyUpdate={true}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>

        );
    }
}

export default Mycharts;