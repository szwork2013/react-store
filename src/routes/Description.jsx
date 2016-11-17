import React, {PropTypes} from 'react';
import {connect} from 'dva';
import AutoLoading from '../components/Common/AutoLoading';
import GoodsIntro from '../components/Common/GoodsIntro';
import ReturnBar from '../components/Common/ReturnBar';
import RunBanner from '../components/Common/RunBanner';
import Floor from  '../components/Common/Floor';
import PromiseBar from '../components/Description/PromiseBar';
import GoodsInfo from '../components/Description/GoodsInfo';
import PriceInfo from '../components/Description/PriceInfo';
import BagBar from '../components/Description/BagBar';

function Description({location, dispatch,description}) {
    const {loading, model,bannerType,navLeftText,badge,deadLine,goodsState,warning,number}=description;
    const returnBarProps = {
        text: navLeftText,
        shareClick:function (){
            dispatch({
                type: "description/share",
            })
        }
    };
    const runBannerProps = {
        banner: model.Imgs,
        type:bannerType
    };
    const priceInfoProps ={
        price: model.Price,
        markPrice: model.MarketPrice,
        name: model.Name,
        flag: model.Flag,
        deadLine:deadLine,
        goodsState: goodsState,
    };
    const goodsIntroProps ={
        content:model.Subject,
        logo:model.FeaturedLog,
    }
    const goodsInfoProps={
        brand:model.Brand,
        spec:model.Specification,
        place:model.PlaceOfOrigin,
        store:model.StorageMethod,
        date:model.DurabilityPeriod,
        use:model.CookingMethod,
        express:model.DeliveryInfo,
        message:model.ServiceInfo,
        tip:model.Tips,
    }
    const promiseBarProps={
        image:model.PromiseLog
    }
    const bagBarProps={
        badge:badge,
        warning:warning,
        number:number,
        clickBag:function (){
            dispatch({
                type: "description/clickBag",
            })
        },
        callService:function (){
            dispatch({
                type: "description/service",
            })
        },
        joinBag :function (){
            dispatch({
                type: "description/add",
            })
        }
    }
    return (
        <div>
            <AutoLoading loading={loading} />
            <ReturnBar {...returnBarProps} />
            <RunBanner {...runBannerProps} />
            <PriceInfo {...priceInfoProps} />
            <Floor />
            <GoodsIntro {...goodsIntroProps} />
            <Floor />
            <GoodsInfo {...goodsInfoProps}/>
            <Floor />
            <PromiseBar {...promiseBarProps} />
            <BagBar {...bagBarProps} />
        </div>
    );
}

Description.propTypes = {
    loading: PropTypes.bool, //是否加载
    model: PropTypes.object, //数据体
    navLeftText: PropTypes.string, //返回上层文字
    bannerType: PropTypes.bool, //banner是否可以跳转
    badge:PropTypes.number, //购物袋中该商品数量
    warning:PropTypes.number, //商品预警数量
    number:PropTypes.number, //商品库存数量
    deadLine: PropTypes.number, //距离下架时间
    goodsState :  PropTypes.string, //商品状态 {"sell","sold"}
};

function mapStateToProps({description}) {
    return {description};
}

export default connect(mapStateToProps)(Description);