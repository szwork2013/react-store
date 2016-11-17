import {getProjectData} from "../services/WebConfigs";
import pathToRegexp from "path-to-regexp";
import Toast from "antd-mobile/lib/toast";
import "antd-mobile/lib/toast/style/index.css";

export default {
    namespace: 'member',
    state: {
        loading: false,
        bannerType: "link",
        model: [],
        member:{
            id:0,
            header:"",
            name:"",
        },
        selected:"my",
        total:0,
        badge:0,
        top:true,
    },
    subscriptions: {
        setup({dispatch, history}) {
            history.listen(({pathname}) => {
                const match = pathToRegexp('/member/:id').exec(pathname);
                if (match) {
                    const id = match[1];
                    dispatch({
                        type: 'query',
                        payload: id,
                    });
                }
            })
        }
    },
    effects: {
        *query({payload}, {call, put}) {
            yield put({type: 'showLoading'})
            const {data} = yield call(getProjectData, payload);
            if (data) {
                yield put({
                    type: 'querySuccess',
                    payload: {data, total: payload}
                });
            } else {
                yield put({type: 'hideLoading'});
            }
        },
        *over({payload}, {call, put}){
            yield put({type: 'showLoading'})
            yield put({type: 'hideLoading'});
            Toast.info('已经木有商品啦!', 1)
        },
    },
    reducers: {
        querySuccess(state, action){
            let{member} = action.payload;
            return {...state, member,loading: false}
        },
        showLoading(state) {
            return {...state, loading: true};
        },
        hideLoading(state){
            return {...state, loading: false};
        },
    }
}