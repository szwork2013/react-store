import React, {PropTypes} from  'react';
import { browserHistory,Router,Link } from 'react-router'
import 'antd-mobile/lib/badge/style/index.css';
import styles from './Commen.less'
import GoodsCard from "../Common/GoodsCard"

class Hot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"超值热卖",
        };
    }

    render() {
        const ts=this.state;
        const {title,model}=this.props;
        const titleModel=(model || []).map((item,index)=>{
            const goodsCardprops={
                key:index,
                model:item,
                type:"hot"
            }
            return <GoodsCard {...goodsCardprops}/>;
        })
        return (
            <div className={styles.box}>
                <div className={styles.title}>
                    {title||ts.title}
                </div>
                {titleModel}
            </div>
        )
    }
}

Hot.propTypes = {
    title:PropTypes.string, //热卖标题
    model:PropTypes.array, //热卖商品组
    overChange:PropTypes.func, //无商品加载后触发
}

export default Hot