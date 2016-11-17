import {getGoods} from  '../services/WebConfigs';
import Toast from "antd-mobile/lib/toast";
import  'antd-mobile/lib/toast/style/index.css'
import pathToRegexp from 'path-to-regexp';

function minusLine(timeout){
    return new Promise(resolve => {
        clearTimeout(sss)
        var sss=setTimeout(resolve, timeout);
        sss
    });
}
export default {
    namespace: 'description',
    state: {
        loading: false,
        isShow:false,
        bannerType:"show",
        model:[],
        goodsState:"sell",
        navLeftText:"商品详情",
        badge:0,
        deadLine:0,
        warning:0,
        number:0,
    },
    subscriptions: {
        setup({dispatch, history}) {
            history.listen(({pathname}) => {
                const match = pathToRegexp('/description/:id').exec(pathname);
                if (match) {
                    const id = match[1];
                    dispatch({
                        type: 'query',
                        payload: id,
                    });
                }
            })
            dispatch({type: 'minus'})
        },
    },
    effects: {
        *query({payload}, {call, put}) {
            yield put({type: 'showLoading'})
            const {data} = yield call(getGoods, payload);
            if (data) {
                yield put({
                    type: 'querySuccess',
                    payload: data
                });
            } else {
                yield put({type: 'hideLoading'});
            }
        },
        *minus(action, {call, put}) {
            yield call(minusLine, 1000);
            yield put({type: 'changeLine'})
            yield put({type: 'minus'})
        },
        *share(action, {call, put}) {
            Toast.info('分享模块尚未开发,尽情期待!',1)
        },
        *service(action, {call, put}) {
            Toast.info('客服模块尚未开发,尽情期待!',1)
        },
        *clickBag(action, {call, put}) {
            Toast.info('购物袋模块尚未开发,尽情期待!',1)
        },
        *add(action , {call,   put}) {
            Toast.info('加入购物袋模块尚未开发,尽情期待!',1)
            yield put({type: 'showLoading'})
            //const {data} = yield call(goods, payload);
            //if (data) {
            //      yield put({
            //          type: 'joinSuccess',
            //          payload: data
            //      });
            //} else {
                yield put({type: 'hideLoading'});
            //}

        },
    },
    reducers: {
        querySuccess(state, action){
            let model = action.payload;
            return {...state, model,deadLine:model.Countdown,warning:model.WarningNumber,number:model.Number,loading: false}
        },
        joinSuccess(state,action){
            let badgeLog = action.payload;
            return {...state, badge:badgeLog+1,loading: false}
        },
        changeLine(state){
            let deadLineLog = state.deadLine-1;
            if (deadLineLog<=0)
                return {...state,goodsState:"sold",deadLine:0}
            else
                return {...state, deadLine:deadLineLog}
        },
        stopChangeLine(state){
            return {...state,goodsState:"sold"}
        },
        showLoading(state) {
            return {...state, loading: true};
        },
        hideLoading(state){
            return {...state, loading: false};
        },
        closeModel(state){
            return {...state,isShow:false}
        },
        openModel(state){
            return {...state,isShow:true}
        }
    }
}