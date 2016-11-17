import React, {PropTypes} from  'react';
import GoodsCard from "../Common/GoodsCard";
import styles from "./Group.less";

class Group extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayClock:"fourClock",
        }
    }
    handleChang(clock,group){
        const {changeClock}=this.props;
        changeClock(clock,group)
    }
    render() {
        const ts=this.state;
        let {eightClock,fourClock,displayClock,overTime,changTime}=this.props;
        const goodsList=()=>{
            let clock=displayClock=="fourClock"?fourClock.DailyBerserkDtos:eightClock.DailyBerserkDtos;
            if (!clock) return;
            let type=displayClock=="fourClock"?fourClock.EndSecondsType:eightClock.EndSecondsType;
            return(clock.map((item,index)=>{
                const goodsCardProps={
                    model:item,
                    type:"group",
                    typeKey:type
                };
                return <GoodsCard key={index}{...goodsCardProps}/>
            }))
        };
        const time=()=>{
            let clock=displayClock=="fourClock"?fourClock.EndSeconds:eightClock.EndSeconds;
            if (clock==0){
                overTime
                return
            };
            let type=displayClock=="fourClock"?fourClock.EndSecondsType:eightClock.EndSecondsType;
            type=type==1?"结束":"开始";
            var h=0,i=0,s=parseInt(clock);
            if(s>60){
                i=parseInt(s/60);
                s=parseInt(s%60);
                if(i > 60) {
                    h=parseInt(i/60);
                    i = parseInt(i%60);
                }
            }
            // 补零
            var zero=function(v){
                return (v>>0)<10?"0"+v:v;
            };
            return  <li>距离{type}还剩 <span>{zero(h)}</span>:<span>{zero(i)}</span>:<span>{zero(s)}</span></li>
        };
        return (
            <div >
                <p className={styles.clock}>
                    <span className={displayClock=="fourClock"?styles.selected:styles.none} onClick={()=>{this.handleChang("fourClock",fourClock)}} >14点团</span>
                    <span className={displayClock=="eightClock"?styles.selected:styles.none} onClick={()=>{this.handleChang("eightClock",eightClock)}} >晚8疯抢</span>
                    {time()}
                </p>
                <div>
                    {goodsList()}
                </div>
            </div>
        )
    }
}

Group.propTypes = {
    eightClock:PropTypes.object, //八点档
    fourClock:PropTypes.object, //十四点档
    displayClock: PropTypes.string, //显示档期 {"fourClock","eightClock"}
    changeClock: PropTypes.func, //改变显示档期
    changeTime: PropTypes.func, //改变倒计时
}

export default Group