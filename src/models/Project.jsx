import {getProjectData} from "../services/WebConfigs";
import pathToRegexp from "path-to-regexp";
import Toast from "antd-mobile/lib/toast";
import "antd-mobile/lib/toast/style/index.css";

export default {
    namespace: 'project',
    state: {
        loading: false,
        bannerType: "link",
        model: [],
        selected: "首页",
        id: 0,
        top:true,
    },
    subscriptions: {
        setup({dispatch, history}) {
            history.listen(({pathname}) => {
                const match = pathToRegexp('/project/:id').exec(pathname);
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
                    payload: {data: data, id: payload}
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
            let model = action.payload.data;
            let selected = action.payload.id;
            model.NavigationList.map((item)=> {
                if (item.Id == selected) {
                    selected = item.Name
                    return
                }
                return
            })
            return {...state, model, selected, loading: false}
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