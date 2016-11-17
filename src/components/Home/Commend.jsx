import React, {PropTypes} from  'react';
import { browserHistory,Router,Link } from 'react-router'
import 'antd-mobile/lib/badge/style/index.css';
import styles from './Commen.less'
import GoodsCard from "../Common/GoodsCard"

class Commend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"捕手推荐",
        };
    }
    render() {
        const ts=this.state;
        const {title,model,moreShow}=this.props;
        const titleModel=(model || []).map((item,index)=>{
            const goodsCardProps={
                key:index,
                model:item,
                type:"normal"
            }
            return <GoodsCard {...goodsCardProps}/>;
        })
        return (
            <div className={styles.box}>
                <div className={styles.title}>
                    {title||ts.title}
                </div>
                {titleModel}
                <div style={{display:moreShow?"block":"none"}}>
                    <Link  className={styles.button}  to={"/commend"}>更多</Link>
                </div>
            </div>
        )
    }
}

Commend.propTypes = {
    title:PropTypes.string, //今日新品标题
    model:PropTypes.array, //商品组
    moreShow:PropTypes.bool, //更多按钮是否显示
}

export default Commend