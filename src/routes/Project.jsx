import React, {PropTypes} from 'react';
import {connect} from 'dva';
import Scorll from "../components/Common/Scorll";
import TopBlock from "../components/Common/TopBlock";
import TitleBar from '../components/Common/TitleBar';
import RotateBar from '../components/Common/RotateBar';
import RunBanner from '../components/Common/RunBanner';
import AutoLoading from '../components/Common/AutoLoading';
import ProjectGroup from "../components/Project/ProjectGroup"
import ToolBar from "../components/Common/ToolBar";

function Project({location, dispatch,project}) {
    const {loading,model,bannerType ,selected,badgeTool,selectedTool,top}=project
    const rotateBarProps={
        titleList:model.NavigationList,
        selected:selected,
    };
    const runBannerProps = {
        banner: model.BannerList,
        type: bannerType
    };
    const projectGroupProps={
        model:model.Themes,
        overChange:function () {
            dispatch({
                type: "project/over",
            })
        }
    };
    const toolBarProps = {
        badge: badgeTool,
        selected: selectedTool
    };
    const scorllProps = {
        block:function () {
            dispatch({
                type: "project/changeTop",
                payload:true
            })
        },
        center:function(){
            dispatch({
                type: "project/changeTop",
                payload:false
            })
        },
        over:function(){
            dispatch({
                type: "project/over",
            })
        }
    }
    return (
        <div>
            <AutoLoading loading={loading} />
            <TopBlock top={top}/>
            <Scorll {...scorllProps} />
            <TitleBar />
            <RotateBar {...rotateBarProps}/>
            <RunBanner {...runBannerProps}/>
            <ProjectGroup {...projectGroupProps}/>
            <ToolBar {...toolBarProps} />
        </div>
    );
}

Project.propTypes = {
    loading: PropTypes.bool, //是否加载
    model: PropTypes.object, //数据体
    bannerType: PropTypes.bool, //banner是否可以跳转
    selected:PropTypes.string ,//导航默认选中
    badgeTool:PropTypes.number,//购物袋数量
    selectedTool:PropTypes.string ,//工具栏选中
    top: PropTypes.bool, //是否已经到页面顶部
};

function mapStateToProps({project}) {
    return {project};
}

export default connect(mapStateToProps)(Project);