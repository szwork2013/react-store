import React, {PropTypes} from "react";
import {connect} from "dva";
import TitleBar from "../components/Common/TitleBar";
import RotateBar from "../components/Common/RotateBar";
import RunBanner from "../components/Common/RunBanner";
import AutoLoading from "../components/Common/AutoLoading";
import Floor from "../components/Common/Floor";
import Scorll from "../components/Common/Scorll";
import TopBlock from "../components/Common/TopBlock";
import ToolBar from "../components/Common/ToolBar";
import GiftModel from "../components/Home/Gift";
import GroupModel from "../components/Home/Group";
import NewGoods from "../components/Home/NewGoods";
import CommenModel from "../components/Home/Commend";
import HotModel from "../components/Home/Hot";

function Home({location, dispatch, home}) {
    const {
        model,
        loading,
        bannerType,
        selected,
        eightClock,
        fourClock,
        giftPack,
        displayClock,
        clockTime,
        clockType,
        newGoods,
        newGoodsMore,
        commenedModel,
        commenedShow,
        hotModel,
        selectedTool,
        badgeTool,
        top
    }=home;
    const rotateBarProps = {
        titleList: model.NavigationList,
        selected: selected,
    };
    const runBannerProps = {
        banner: model.BannerList,
        type: bannerType
    };
    const giftProps = {
        type: giftPack.Type,
        image: giftPack.ImgAccessKey,
        id: giftPack.Id
    };
    const groupModelProps = {
        eightClock: eightClock,
        fourClock: fourClock,
        displayClock: displayClock,
        clockTime: clockTime,
        clockType: clockType,
        overTime: function () {
            dispatch({
                type: "home/query",
            })
        },
        changTime: function () {
            console.log("change")
            dispatch({
                type: "home/minus",
            })
        },
        changeClock: function (clock, group) {
            dispatch({
                type: "home/changeClock",
                payload: {
                    clock: clock,
                    group: group
                }
            })
        },
    };
    const newGoodsProps = {
        model: newGoods,
        moreShow: newGoodsMore
    };
    const commenModelProps = {
        model: commenedModel,
        moreShow: commenedShow
    }
    const hotModelProps = {
        model: hotModel,
        overChange: function () {
            dispatch({
                type: "home/over",
            })
        },
    }
    const toolBarProps = {
        badge: badgeTool,
        selected: selectedTool
    }
    const scorllProps = {
        block:function () {
            dispatch({
                type: "home/changeTop",
                payload:true
            })
        },
        center:function(){
            dispatch({
                type: "home/changeTop",
                payload:false
            })
        },
        over:function(){
            dispatch({
                type: "home/over",
            })
        }
    }
    return (
        <div>
            <AutoLoading loading={loading}/>
            <TopBlock top={top}/>
            <Scorll {...scorllProps} />
            <TitleBar />
            <RotateBar {...rotateBarProps}/>
            <RunBanner {...runBannerProps}/>
            <GiftModel {...giftProps}/>
            <GroupModel{...groupModelProps}/>
            <NewGoods {...newGoodsProps} />
            <CommenModel {...commenModelProps}/>
            <Floor color="rgb(50,50,50)"/>
            <HotModel {...hotModelProps} />
            <ToolBar {...toolBarProps}/>
        </div>
    );
}

Home.propTypes = {
    loading: PropTypes.bool, //是否加载
    model: PropTypes.object, //数据体
    bannerType: PropTypes.bool, //banner是否可以跳转
    selected: PropTypes.string,//导航默认选中
    eightClock: PropTypes.object,//八点档数据
    fourClock: PropTypes.object,//四点档数据
    giftPack: PropTypes.object, //大礼包数据
    displayClock: PropTypes.string, //选中的档期
    clockTime: PropTypes.number, //倒计时
    clockType: PropTypes.number, //倒计时类型
    newGoods: PropTypes.array, //新品数组
    newGoodsMore: PropTypes.bool, //新品是否可以跳转
    commenedModel: PropTypes.array, //推荐数组
    commenedShow: PropTypes.bool, //推荐是否可以跳转
    hotModel: PropTypes.array,//热卖数据
    selectedTool: PropTypes.string,//选中的底部工具栏
    badgeTool: PropTypes.number,//选中的底部工具栏计数
    top:PropTypes.bool, //是否在页面顶部
};

function mapStateToProps({home}) {
    return {home};
}

export default connect(mapStateToProps)(Home);