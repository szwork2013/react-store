import React, {PropTypes} from  'react';
import {browserHistory, Router, Link} from 'react-router';
import HalfCard from './HalfCard';
import styles from './HalfGroup.less';

class HalfGroup extends React.Component {
    render() {
        const {model}=this.props;
        const cardList = (model || []).map((item, index)=> {
            const halfCardProps = {
                model: item,
                key: index,
            }
            return <HalfCard {...halfCardProps} />
        });
        return <div className={styles.group} style={{display: ( model || []).length==0 ? "none" : "block"}}>
            {cardList}
        </div>
    }
}

HalfGroup.propTypes = {
    model: PropTypes.array, //商品列表
}

export default HalfGroup