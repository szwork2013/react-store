import {getSpecial} from  '../services/WebConfigs';
import Toast from "antd-mobile/lib/toast";
import  'antd-mobile/lib/toast/style/index.css'
import pathToRegexp from 'path-to-regexp';

export default {
    namespace: 'special',
    state: {
        loading: false,
        bannerType:"show",
        model:[],
        goodsState:"sell",
        navLeftText:"商品详情",
        top:true,
    },
    subscriptions: {
        setup({dispatch, history}) {
            history.listen(({pathname}) => {
                const match = pathToRegexp('/special/:id').exec(pathname);
                if (match) {
                    const id = match[1];
                    dispatch({
                        type: 'query',
                        payload: id,
                    });
                }
            })
        },
    },
    effects: {
        *query({payload}, {call, put}) {
            yield put({type: 'showLoading'})
            const {data} = yield call(getSpecial, payload);
            if (data) {
                yield put({
                    type: 'querySuccess',
                    payload: data
                });
            } else {
                yield put({type: 'hideLoading'});
            }
        },
        *share(action, {call, put}) {
            Toast.info('分享模块尚未开发,尽情期待!',1)
        },
        *over({payload}, {call, put}){
            yield put({type: 'showLoading'})
            yield put({type: 'hideLoading'});
            Toast.info('已经木有商品啦!', 1)
        },
    },
    reducers: {
        querySuccess(state, action){
            let model = action.payload;
            return {...state, model,navLeftText:model.Name,loading: false}
        },
        showLoading(state) {
            return {...state, loading: true};
        },
        hideLoading(state){
            return {...state, loading: false};
        },
        changeTop(state,action){
            let top=action.payload;
            return {...state,top}
        }
    }
}