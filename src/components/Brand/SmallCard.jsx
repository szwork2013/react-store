import React, {PropTypes} from  'react';
import { browserHistory,Router,Link } from 'react-router';
import styles from "./SmallCard.less"

class SmallCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cut:"?imageMogr/v2/thumbnail/200x/gravity/Center/crop/200x100/interlace/1",
            model:[],
        };
    }
    render() {
        const ts=this.state;
        const {model}=this.props;
        const card=(model || ts.model).map((item,index)=>{
            return <Link className={styles.card} to={`special/${item.Id}`} key={index}>
                <img src={`${item.Logo}${ts.cut}`} alt={item.Name} />
            </Link>
        })

        return <div>{card}</div>
    }
}

SmallCard.propTypes = {
    model:PropTypes.array , //商品组
}

export default SmallCard