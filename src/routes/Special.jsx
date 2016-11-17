import React, {PropTypes} from 'react';
import {connect} from 'dva';
import AutoLoading from '../components/Common/AutoLoading';
import ReturnBar from '../components/Common/ReturnBar';
import RunBanner from '../components/Common/RunBanner';
import GoodsIntro from '../components/Common/GoodsIntro';
import HalfGroup from '../components/Common/HalfGroup';
import Scorll from "../components/Common/Scorll";
import TopBlock from "../components/Common/TopBlock";

function Special ({location, dispatch,special}) {
    const {loading, model,bannerType,navLeftText,top}=special;
    const returnBarProps = {
        text: navLeftText,
        shareClick:function (){
            dispatch({
                type: "special/share",
            })
        }
    };
    const runBannerProps = {
        banner: [model.ImgAccessKey],
        type:bannerType
    };
    const goodsIntroProps ={
        content:model.MealtSay,
        logo:model.SpecialLog,
    };
    const halfGroupProps={
        model:model.ProductIdLists
    };
    const scorllProps = {
        block:function () {
            dispatch({
                type: "special/changeTop",
                payload:true
            })
        },
        center:function(){
            dispatch({
                type: "special/changeTop",
                payload:false
            })
        },
        over:function(){
            dispatch({
                type: "special/over",
            })
        }
    }
    return (
        <div>
            <AutoLoading loading={loading} />
            <TopBlock top={top}/>
            <Scorll {...scorllProps} />
            <ReturnBar {...returnBarProps} />
            <RunBanner {...runBannerProps} />
            <GoodsIntro {...goodsIntroProps} />
            <HalfGroup {...halfGroupProps} />
        </div>
    );
}

Special.propTypes = {
    loading: PropTypes.bool, //是否加载
    model: PropTypes.object, //数据体
    navLeftText: PropTypes.string, //返回上层文字
    bannerType: PropTypes.bool, //banner是否可以跳转
    badgeTool: PropTypes.string,//工具条购物袋数量
    top:PropTypes.bool, //是否在页面顶部
};

function mapStateToProps({special}) {
    return {special};
}

export default connect(mapStateToProps)(Special);