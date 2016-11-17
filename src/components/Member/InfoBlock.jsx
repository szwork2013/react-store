import React, {PropTypes} from  'react';
import { browserHistory,Router,Link } from 'react-router'
import 'antd-mobile/lib/badge/style/index.css';
import styles from './Commen.less'
import GoodsCard from "../Common/GoodsCard"

class Commend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerCut:"imageMogr/v2/thumbnail/480x/gravity/Center/crop/480x270/interlace/1",
            userInfo:{
                header:"https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png",
                name:"小手",
                id:0,
            },
            total:0,
            
        };
    }
    render() {
        const ts=this.state;
        const {userInfo,total}=this.props;
        return (
            <div className={styles.box}>
                <div className={styles.header}>
                    {userInfo.header || ts.userInfo.header}
                </div>
                <div className={styles.name}>
                    {userInfo.name || ts.userInfo.name}
                </div>
                <div className={styles.number}>
                    <div className={styles.id}>
                        {userInfo.id || ts.userInfo.id}
                    </div>
                    <div className={styles.total}>
                        {total || ts.total}
                    </div>
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