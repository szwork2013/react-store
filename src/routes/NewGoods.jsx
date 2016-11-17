import React, {PropTypes} from "react";
import {connect} from "dva";
import AutoLoading from "../components/Common/AutoLoading";
import ReturnBar from "../components/Common/ReturnBar";
import HalfGroup from "../components/Common/HalfGroup";
import Scorll from "../components/Common/Scorll";
import TopBlock from "../components/Common/TopBlock";

function NewGoods({location, dispatch, newGoods}) {
    const {loading, model, title, top}=newGoods;
    const returnBarProps = {
        text: title,
        shareClick: function () {
            dispatch({
                type: "newGoods/share",
            })
        }
    };
    const halfGroupProps = {
        model: model,
        overChange: function () {
            dispatch({
                type: "newGoods/over",
            })
        }
    };
    const scorllProps = {
        block: function () {
            dispatch({
                type: "newGoods/changeTop",
                payload: true
            })
        },
        center: function () {
            dispatch({
                type: "newGoods/changeTop",
                payload: false
            })
        },
        over: function () {
            dispatch({
                type: "newGoods/over",
            })
        }
    };
    return (
        <div>
            <AutoLoading loading={loading}/>
            <TopBlock top={top}/>
            <Scorll {...scorllProps} />
            <ReturnBar {...returnBarProps} />
            <HalfGroup {...halfGroupProps} />
        </div>
    );
}

NewGoods.propTypes = {
    loading: PropTypes.bool, //是否加载
    model: PropTypes.object, //数据体
    title: PropTypes.string, //返回上层文字
    top: PropTypes.bool, //是否已经到顶部
};

function mapStateToProps({newGoods}) {
    return {newGoods};
}

export default connect(mapStateToProps)(NewGoods);