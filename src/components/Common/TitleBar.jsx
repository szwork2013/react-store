import React, {PropTypes} from  'react';
import { browserHistory,Router,Link } from 'react-router'
import Icon from 'antd-mobile/lib/icon';
import  'antd-mobile/lib/icon/style/index.css'
import styles from  './TitleBar.less'

class TitleBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"逛食记",
            show:true
        };
    }
    render() {
        const ts=this.state;
        const {title,show}=this.props;
        return (
            <div className={styles.titleBar}>
                <div className={styles.titleTitle}>
                    <p>
                        <Link to="/">
                            {title || ts.title}
                        </Link>
                    </p>
                    <div className={styles.titleIcon} style={{display:show==false ? "none":"block"}}>
                        <Link to="/search">
                            <Icon type="search" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

TitleBar.propTypes = {
    title:PropTypes.string, //标题
    show:PropTypes.bool, //是否显示搜索按钮
}

export default TitleBar