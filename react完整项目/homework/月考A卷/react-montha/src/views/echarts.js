import React, { Component } from 'react'
import TicketChart from 'echarts-for-react'
export default class Chart extends Component {
  
    state = {...this.props.location.state,list:0}

    render() {
        console.log(this.state)
        const {title,list} = this.state;
        return (
            <div>
                <div>{title}</div>
                <div>{list}人参与</div>
                <TicketChart option = {this.chartResult()} style={{width:'100%',height:300}}/>
            </div>
        )
    }

    componentDidMount = ()=>this.init();

    init= async ()=>{
        const {id} = this.state;
        let res = await this.http('post','/chart/user',{id})
        const {code,msg,data} = res.data
        if(code === 0){
            this.setState({list:data.list})
            return
        }
        alert(msg)
    }

    //echarts 图标数据
    chartResult =()=>{
        const {options} = this.state;

        let obj = {tooltip: {trigger: 'axis',axisPointer: {type: 'shadow'}},
            xAxis: {type: 'category',data:[],axisTick:{alignWithLabel: true}},
            yAxis: {type: 'value'},
            series: [{name: '选项',barWidth: '60%',data: [],type: 'bar'}]
        }

        options.forEach(item=>{
            obj.xAxis.data.push(item.option_name)
            obj.series[0].data.push(item.count)
        })

        return  obj
    }
}
