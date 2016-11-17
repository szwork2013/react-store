import React, {PropTypes} from  'react';
import styles from "./PriceInfo.less";
class PriceInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const ts=this.state;
        const {price,markPrice,name,flag,deadLine,goodsState}=this.props;
        const nation=()=>{
            if (flag)
                return <img src={flag} className={styles.flag}/>
        };
        const overTime=(deadLine,goodsState)=>{
                // 计算
            if (goodsState=="sold") return "该物品已下架"
            else {
                var d=0,h=0,i=0,s=parseInt(deadLine);
                if(s>60){
                    i=parseInt(s/60);
                    s=parseInt(s%60);
                    if(i > 60) {
                        h=parseInt(i/60);
                        i = parseInt(i%60);
                        if(h > 24) {
                            h=parseInt(h/24);
                            d = parseInt(h%24);
                        }
                    }
                }
                // 补零
                var zero=function(v){
                    return (v>>0)<10?"0"+v:v;
                };
                if (d>0)
                    return `剩${zero(d)}天${zero(h)}:${zero(i)}:${zero(s)}`
                else if (h>0)
                    return `剩${zero(h)}小时${zero(i)}:${zero(s)}`
                else if (i>0)
                    return `剩余时间${zero(i)}:${zero(s)}`
            }
        };
        return (
           <div className={styles.header}>
               <h3 className={styles.title}>
                   {nation()}
                   {name}
               </h3>
               <div className={styles.sale}>
                   <div className={styles.price}>{price}</div>
                   <div>
                       <span className={styles.cost}><del>{markPrice}</del></span>
                       <span className={styles.time}>{overTime(deadLine,goodsState)}</span>
                   </div>
               </div>
           </div>
        )
    }
}

PriceInfo.propTypes = {
    price: PropTypes.number, //本店价格
    markPrice: PropTypes.number, //市场价
    name: PropTypes.string, //商品名
    flag: PropTypes.string, //国旗
    deadLine: PropTypes.number, //距离商品下架时间
    goodsState: PropTypes.string, //商品状态 {"sell","sold"}
}

export default PriceInfo