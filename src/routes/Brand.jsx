import React, {PropTypes} from 'react';
import {connect} from 'dva';
import TitleBar from '../components/Common/TitleBar';
import ToolBar from '../components/Common/ToolBar';
import Scorll from "../components/Common/Scorll";
import TopBlock from "../components/Common/TopBlock";
import BrandGroup from "../components/Brand/Brand"
import AutoLoading from '../components/Common/AutoLoading';

function Brand({location, dispatch,brand}) {
    const {model,loading,selected,title,showSearch,top}=brand
    const titleBarProps={
        title:title,
        show:showSearch
    }
    const brandGroupProps={
        model:model,
        overChange:function(current){
            dispatch({
                type: "brand/over",
            })
        }
    }
    const toolBarProps={
        selected:selected
    }
    const scorllProps = {
        block:function () {
            dispatch({
                type: "brand/changeTop",
                payload:true
            })
        },
        center:function(){
            dispatch({
                type: "brand/changeTop",
                payload:false
            })
        },
        over:function(){
            dispatch({
                type: "brand/over",
            })
        }
    }
    return (
        <div>
            <AutoLoading loading={loading} />
            <TopBlock top={top}/>
            <Scorll {...scorllProps} />
            <TitleBar {...titleBarProps}/>
            <BrandGroup {...brandGroupProps}/>
            <ToolBar {...toolBarProps}/>
        </div>
    );
}

Brand.propTypes = {
    loading: PropTypes.bool, //是否加载
    model: PropTypes.object, //数据体
    selected:PropTypes.string ,//导航默认选中
    title:PropTypes.string ,//头部名称
    showSearch:PropTypes.bool,//是否显示搜索按钮
};

function mapStateToProps({brand}) {
    return {brand};
}

export default connect(mapStateToProps)(Brand);