import {getSearchGoods} from  '../services/WebConfigs';
import pathToRegexp from 'path-to-regexp';
import Toast from "antd-mobile/lib/toast";
import {hashHistory, Router, Link} from 'react-router';
import  'antd-mobile/lib/toast/style/index.css'

export default {
    namespace: 'searchGoods',
    state: {
        loading: false,
        model: [],
        searchKey: "",
        params: {
            keyword: "",
            type: 1,
            current: 1,
            size: 10,
        },
        top:true,
        placeholder: "商品名称",
    },
    subscriptions: {
        setup({dispatch, history}) {
            history.listen(({pathname}) => {
                const match = pathToRegexp('/search/:key').exec(pathname);
                if (match) {
                    const id = match[1];
                    dispatch({
                        type: 'query',
                        payload: {
                            keyword: id,
                            type: 1,
                            size: 10,
                            current: 1
                        }
                    });
                    dispatch({
                        type: 'changeKey',
                        payload: id
                    });
                }
            })
        }
    },
    effects: {
        *query({payload}, {call, put}) {
            yield put({type: 'showLoading'})
            const {data} = yield call(getSearchGoods, payload);
            yield put({type: 'querySuccess', payload: data});
            yield put({type: 'resetParams', payload: payload});
            window.scrollTo(0, 0)
            if (data.length == 0) {
                yield put({type: 'hideLoading'});
                Toast.info('木有找到商品!不如试试搜索 肉', 1)
            }
        },
        *over({payload}, {call, put}){
            yield put({type: 'changeType', payload: payload});
            yield put({type: 'showLoading'})
            console.log(payload)
            const {data} = yield call(getSearchGoods, payload);
            if (data.length != 0) {
                yield put({type: 'addSuccess', payload: data});
                yield put({type: 'resetParams', payload: payload});
            }
            else {
                yield put({type: 'hideLoading'});
                Toast.info('已经木有商品啦!', 1)
            }
        },
        *type({payload}, {call, put}){
            yield put({type: 'changeType', payload: payload});
            yield put({type: 'showLoading'})
            console.log(payload)
            const {data} = yield call(getSearchGoods, payload);
            if (data && data.length != 0) {
                yield put({type: 'querySuccess', payload: data});
                yield put({type: 'resetParams', payload: payload});
                window.scrollTo(0, 0)
            }
            else {
                yield put({type: 'hideLoading'});
                Toast.info('这个分类下木有商品!', 1)
            }
        }
    },
    reducers: {
        querySuccess(state, action){
            let data = action.payload;
            return {...state, model: data, loading: false}
        },
        addSuccess(state, action){
            let data = action.payload;
            let model = state.model.concat(data)
            return {...state, model, loading: false}
        },
        showLoading(state) {
            return {...state, loading: true};
        },
        hideLoading(state){
            return {...state, loading: false};
        },
        changeKey(state, action){
            let searchKey = action.payload;
            return {...state, searchKey};
        },
        changeType(state, action){
            let {type, current} = action.payload;
            let params = state.params
            params.type = type
            params.current = current
            return {...state, params};
        },
        changeType(state, action){
            let {type} = action.payload;
            let params = state.params
            params.type = type
            return {...state, params};
        },
        resetParams(state, action){
            let params = action.payload;
            return {...state, params}
        },
        changeTop(state,action){
            let top=action.payload;
            return {...state,top}
        }
    }
}