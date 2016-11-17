import {getSearchLog,getSearchHot} from  '../services/WebConfigs';
import  'antd-mobile/lib/toast/style/index.css'

export default {
    namespace: 'search',
    state: {
        loading: false,
        model:[],
        log:[],
        searchKey:"",
        placeholder:"商品名称",
    },
    subscriptions: {
        setup({dispatch, history}) {
            history.listen(({pathname}) => {
                if(pathname=="/search"){
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
            const hot = yield call(getSearchHot, payload);
            const log = yield call(getSearchLog, payload);
            const data={hot:hot.data,log:log.data};
            if (data) {
                yield put({ type: 'querySuccess', payload: data});
            }
            else{
                yield put({type: 'hideLoading'});
            }
        },
        clearLog({payload}, {call, put}) {
            console.log("clearLog")
        }
    },
    reducers: {
        querySuccess(state, action){
            let data = action.payload;
            return {...state, hot:data.hot,log:data.log,loading:false}
        },
        showLoading(state) {
            return {...state, loading: true};
        },
        hideLoading(state){
            return {...state, loading: false};
        },
        changeKey(state,action){
            let searchKey = action.payload;
            return {...state, searchKey};
        },
    }
}