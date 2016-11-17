import React, {PropTypes} from  'react';
import { browserHistory,Router,Link } from 'react-router'
import 'antd-mobile/lib/badge/style/index.css';
import styles from './RotateBar.less'

class RotateBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleList:[],
            selected:"首页",
        };
    }
    render() {
        const ts=this.state;
        const {titleList,selected}=this.props;
        const titleModel=(titleList || ts.titleList).map((item,index)=>{
            switch (item.Type) {
                case 0:
                    return <div key={index} className={(selected || ts.selected) == item.Name ? styles.selected : "" }>{item.Name}</div>;
                case 1:
                    return <div key={index} className={(selected || ts.selected) == item.Name ? styles.selected : "" }> <Link to="/"> {item.Name} </Link></div>;
                case 2:
                    return <div key={index} className={(selected || ts.selected) == item.Name ? styles.selected : "" }> <Link to={`project/${item.Id}`}>{item.Name}</Link></div>;
                case 3:
                    return <div key={index} className={(selected || ts.selected) == item.Name ? styles.selected : "" }> <a  href={item.Url}>{item.Name}</a></div>;
            }
        })
        return (
            <div className={styles.rotateBar}>
                <div className={styles.rotateBarList}>
                    {titleModel}
                </div>
            </div>
        )
    }
}

RotateBar.propTypes = {
    titleList:PropTypes.array, //标题组
    select:PropTypes.string, //选中标题
}

export default RotateBar