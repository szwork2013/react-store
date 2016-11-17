import React, {PropTypes} from "react";
import {connect} from "dva";
import AutoLoading from "../components/Common/AutoLoading";
import ToolBar from "../components/Common/ToolBar";


function Member({location, dispatch, member}) {
    const {
        model,
        loading,
        selected,
        selectedTool,
        badgeTool,
        top
    }=member;
    const toolBarProps = {
        badge: badgeTool,
        selected: selectedTool
    }
    return (
        <div>
            <AutoLoading loading={loading}/>

            <ToolBar {...toolBarProps}/>
        </div>
    );
}

Member.propTypes = {
    loading: PropTypes.bool, //是否加载
    model: PropTypes.object, //数据体
    selected: PropTypes.string,//导航默认选中
    selectedTool: PropTypes.string,//选中的底部工具栏
    badgeTool: PropTypes.number,//选中的底部工具栏计数
    top:PropTypes.bool, //是否在页面顶部
};

function mapStateToProps({member}) {
    return {member};
}

export default connect(mapStateToProps)(Member);