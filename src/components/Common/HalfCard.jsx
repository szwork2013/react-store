import React, {PropTypes} from  'react';
import { browserHistory,Router,Link } from 'react-router';
import styles from "./HalfCard.less"

class HalfCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cut:"?imageMogr/v2/thumbnail/200x/gravity/Center/crop/200x200/interlace/1",
        };
    }
    render() {
        const ts=this.state;
        const {model}=this.props;
        const delProps=()=>{
            if  (model.HighPrice)
            return <del>{model.HighPrice}</del>
        };
        const card=()=>{
            return <Link className={styles.card} to={`description/${model.Id}`}>
                <img src={`${model.ImgAccessKey}${ts.cut}`} alt={model.Name} />
                <p>{model.Name}</p>
                <li><span>{model.Price }</span>{delProps()}</li>
            </Link>
        }
        return card()
    }
}

HalfCard.propTypes = {
    model:PropTypes.object , //商品信息
}

export default HalfCard