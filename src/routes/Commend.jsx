import React, {PropTypes} from 'react';
import {connect} from 'dva';
import AutoLoading from '../components/Common/AutoLoading';
import ReturnBar from '../components/Common/ReturnBar';
import GoodsCard from '../components/Common/GoodsCard';
import Scorll from "../components/Common/Scorll";
import TopBlock from "../components/Common/TopBlock";

function Commend ({location, dispatch,commend}) {
    const {loading, model,title,top}=commend;
    const returnBarProps = {
        text: title,
        shareClick:function (){
            dispatch({
                type: "commend/share",
            })
        }
    };
    const group=model.map((item,index)=>{
        const goodsCardProps={
            model:item ,
            type:"normal",
            linkType:item.Type,
            key:index,
         }
        return <GoodsCard {...goodsCardProps} />
    })
    const scorllProps = {
        block:function () {
            dispatch({
                type: "commend/changeTop",
                payload:true
            })
        },
        center:function(){
            dispatch({
                type: "commend/changeTop",
                payload:false
            })
        },
        over:function(){
            dispatch({
                type: "commend/over",
            })
        }
    }
    return (
        <div>
            <AutoLoading loading={loading} />
            <TopBlock top={top}/>
            <Scorll {...scorllProps} />
            <ReturnBar {...returnBarProps} />
            {group}
        </div>
    );
}

Commend.propTypes = {
    loading: PropTypes.bool, //是否加载
    model: PropTypes.object, //数据体
    title: PropTypes.string, //返回上层文字
    top:PropTypes.bool, //是否到顶部
};

function mapStateToProps({commend}) {
    return {commend};
}

export default connect(mapStateToProps)(Commend);