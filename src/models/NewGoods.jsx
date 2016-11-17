import {getNewGoodsData} from  '../services/WebConfigs';
import Toast from "antd-mobile/lib/toast";
import  'antd-mobile/lib/toast/style/index.css'

export default {
    namespace: 'newGoods',
    state: {
        loading: false,
        model:[],
        title:"今日新品",
        top:true,
    },
    subscriptions: {
        setup({dispatch, history}) {
            history.listen(({pathname}) => {
                if(pathname=="/newGoods"){
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
            const {data} = yield call(getNewGoodsData, payload);
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