import React, {PropTypes} from 'react';
import {connect} from 'dva';
import SearchBar from '../components/Search/SearchBar';
import SearchHot from '../components/Search/SearchHot';
import SearchLog from '../components/Search/SearchLog';
import AutoLoading from '../components/Common/AutoLoading';

function Search({location, dispatch,search}) {
    const {loading,hot,log,searchKey}=search
    const searchBarProps={
        searchKey:searchKey,
        changeKey:function(searchKey){
            dispatch({
                type: "search/changeKey",
                payload:searchKey
            })
        }
    }
    const searchHotProps={
        hot:hot
    }
    const searchLogProps={
        log:log,
        clearLog:function(){
            dispatch({
                type: "search/clearLog",
            })
        }
    }
    return (
        <div>
            <AutoLoading loading={loading} />
            <SearchBar {...searchBarProps} />
            <SearchHot {...searchHotProps} />
            <SearchLog {...searchLogProps} />
        </div>
    );
}

Search.propTypes = {
    loading: PropTypes.bool, //是否加载
    hot: PropTypes.array, //热门搜索
    log: PropTypes.array, //搜索历史
};

function mapStateToProps({search}) {
    return {search};
}

export default connect(mapStateToProps)(Search);