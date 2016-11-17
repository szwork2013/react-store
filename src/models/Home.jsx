import {getHomeData} from  '../services/WebConfigs';
import Toast from "antd-mobile/lib/toast";
import  'antd-mobile/lib/toast/style/index.css'

function minusLine(timeout){
    return new Promise(resolve => {
        var sss=setTimeout(resolve, timeout);
        sss
    });
}
export default {
    namespace: 'home',
    state: {
        loading: false,
        bannerType:"link",
        model:[],
        eightClock:{},
        fourClock:{},
        selected:"首页",
        giftPack:{},
        newGoods:[],
        newGoodsMore:false,
        hotModel:[],
        top:true,
        selectedTool:"home"
    },
    subscriptions: {
        setup({dispatch,history}) {
            history.listen(({pathname}) => {
                if(pathname=="/"){
                    dispatch({
                        type: 'query',
                    });
                }
            })
            dispatch({type: 'minus'})
        }
    },
    effects: {
        *query({payload}, {call, put}) {
            yield put({type: 'showLoading'})
            const {data} = yield call(getHomeData);
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
            yield put({type: 'changeTime'})
            yield put({type: 'minus'})
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
            return {...state,
                model,
                eightClock:model.DailyBerserks.ProductInfos.DailyBerserk20,
                fourClock:model.DailyBerserks.ProductInfos.DailyBerserk14,
                giftPack:model.GiftPackList[0],
                displayClock:"fourClock",
                newGoods:model.DailyNewProduct.ProductInfos,
                newGoodsMore:model.DailyNewProduct.IsHashMore,
                commenedModel:model.EditorRecommend.RecommendInfos,
                commenedShow:model.EditorRecommend.IsHashMore,
                hotModel:model.GreatSale,
                loading: false}
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
        changeClock(state,action){
            let model=action.payload
            return {...state,
                displayClock:model.clock,
                clockTime:model.group.EndSeconds,
                clockType:model.group.EndSecondsType,
            }
        },
        changeTime(state){
            let eightClockLog = state.eightClock;
                eightClockLog.EndSeconds=state.eightClock.EndSeconds-1;
            let fourClockLog = state.fourClock;
                fourClockLog.EndSeconds=state.fourClock.EndSeconds-1;
            return {...state,
                fourClock:fourClockLog,
                eightClock:eightClockLog
            }
        },
        changeTop(state,action){
            let top=action.payload;
            return {...state,top}
        }
    }
}