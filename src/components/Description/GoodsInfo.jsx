import React, {PropTypes} from  'react';
import styles from "./GoodsInfo.less"
class GoodsInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"商品信息",
            brand:"品　　牌",
            spec:"规　　格",
            place:"产　　地",
            store:"储存方法",
            date:"保质期限",
            use:"使用方法",
            express:"快递信息",
            message:"服务信息",
            tip:"温馨提示",
        }
    }
    render() {
        const ts=this.state;
        const {title,brand,spec,place,store,date,use,express,message,tip}=this.props;
        const info=(header,value)=>{
            if (value)
                return <div> <span> {header} </span>{value} </div>
        }
        return (
            <div className={styles.info}>
                <p>{title || ts.title}</p>
                {info( ts.brand,brand)}
                {info( ts.spec,spec)}
                {info( ts.place,place)}
                {info( ts.store,store)}
                {info( ts.date,date)}
                {info( ts.use,use)}
                {info( ts.express,express)}
                {info( ts.message,message)}
                {info( ts.tip,tip)}
            </div>
        )
    }
}

GoodsInfo.propTypes = {
    title:PropTypes.string, //商品信息
    brand:PropTypes.string, //品牌
    spec:PropTypes.string, //规格
    place:PropTypes.string, //产地
    store:PropTypes.string, //储存方法
    date:PropTypes.string, //保质期
    use:PropTypes.string, //食用方法
    express:PropTypes.array, //快递
    message:PropTypes.string, //服务信息
    tip:PropTypes.string, //温馨提示
}

export default GoodsInfo