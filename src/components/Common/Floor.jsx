import React, {PropTypes} from  'react';
import styles from "./Floor.less"
class Floor extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {color}=this.props;
        return (
            <div className={styles.height} style={{backgroundColor:color}}></div>
        )
    }
}

Floor.propTypes = {
    color:PropTypes.string, //背景颜色
}

export default Floor