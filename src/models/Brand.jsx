import {getBrandData} from  '../services/WebConfigs';
import  'antd-mobile/lib/toast/style/index.css'
import Toast from "antd-mobile/lib/toast";
import  'antd-mobile/lib/toast/style/index.css'

export default {
    namespace: 'brand',
    state: {
        loading: false,
        model:[],
        selected:"brand",
        title:"品牌馆",
        showSearch:false,
        top:true,
    },
    subscriptions: {
        setup({dispatch, history}) {
            history.listen(({pathname}) => {
                if(pathname=="/brand"){
                    dispatch({
                        type: 'query',
                    });
                }
            })
        }
    },
    effects: {
        *query({payload}, {call, put}) {
            yield put({type: 'showLoading'})
            const {data} = yield call(getBrandData, payload);
            if (data) {
                yield put({
                    type: 'querySuccess',
                    payload:data
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
            let model = action.payload;
            return {...state, model,loading: false }
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