import React, {PropTypes} from 'react';
import {connect} from 'dva';
import SearchBar from '../components/Search/SearchBar';
import SearchType from '../components/Search/SearchType';
import AutoLoading from '../components/Common/AutoLoading';
import Scorll from "../components/Common/Scorll";
import TopBlock from "../components/Common/TopBlock";
import HalfGroup from '../components/Common/HalfGroup';

function SearchGoods({location, dispatch,searchGoods}) {
    const {loading,params,model,searchKey,top}=searchGoods
    const searchBarProps={
        searchKey:searchKey,
        changeKey:function(searchKey){
            dispatch({
                type: "searchGoods/changeKey",
                payload:searchKey
            })
        }
    }
    const searchTypeProps={
        selected:params.type,
        changeSelected:function(type){
            dispatch({
                type: "searchGoods/type",
                payload:{...params,type,current:1}
            })
        }
    }
    const halfGroupProps={
        model:model,
    }
    const scorllProps = {
        block:function () {
            dispatch({
                type: "searchGoods/changeTop",
                payload:true
            })
        },
        center:function(){
            dispatch({
                type: "searchGoods/changeTop",
                payload:false
            })
        },
        over:function(){
            dispatch({
                type: "searchGoods/over",
                payload: {...params,current:params.current+1 }
            })
        }
    }
    return (
        <div>
            <AutoLoading loading={loading} />
            <TopBlock top={top}/>
            <Scorll {...scorllProps} />
            <SearchBar {...searchBarProps} />
            <SearchType {...searchTypeProps} />
            <HalfGroup {...halfGroupProps} />
        </div>
    );
}

SearchGoods.propTypes = {
    loading: PropTypes.bool, //是否加载
    top: PropTypes.bool, //是否到顶部
    model:PropTypes.array, //搜索结果
    params:PropTypes.object, //搜索条件
    searchKey:PropTypes.string, //当前搜索文字
};

function mapStateToProps({searchGoods}) {
    return {searchGoods};
}

export default connect(mapStateToProps)(SearchGoods);