import React, {PropTypes} from  'react';
import styles from  './TopBlock.less';
import Icon from 'antd-mobile/lib/icon';
import  'antd-mobile/lib/icon/style/index.css'

class TopBlock extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {top}=this.props;
        return (
            <div className={styles.topBlock} onClick={ ()=>{ window.scrollTo(0,0)}} style={{display:top ? "none":"block"}}>
                <Icon type="to-top" />
            </div>
        )
    }
}

TopBlock.propTypes = {
    top:PropTypes.bool, //是否在顶部
}

export default TopBlock