import React, {PropTypes} from  'react';
import { browserHistory,Router,Link } from 'react-router'
import 'antd-mobile/lib/badge/style/index.css';
import styles from './NewGoods.less'
import HalfCard from "../Common/HalfCard"

class NewGoods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"今日新品",
            subject:"10点上新",
            moreShow:true
        };
    }
    render() {
        const ts=this.state;
        const {title,subject,model,moreShow}=this.props;
        const titleModel=(model || []).map((item,index)=>{
                return <HalfCard key={index }  model={item}/>;
        })
        return (
            <div className={styles.box}>
                <div className={styles.title}>
                    {title||ts.title}
                </div>
                <span className={styles.subject}>{subject||ts.subject}</span>
                <div className={styles.list}>
                    <div>
                        {titleModel}
                    </div>
                </div>
                <div style={{display:(moreShow ||ts.moreShow)?"block":"none"}}>
                    <Link  className={styles.button}  to={"/newGoods"}>更多</Link>
                </div>
            </div>
        )
    }
}

NewGoods.propTypes = {
    title:PropTypes.string, //今日新品标题
    subject:PropTypes.string, //描述
    model:PropTypes.array, //商品组
    moreShow:PropTypes.bool, //更多按钮是否显示
}

export default NewGoods