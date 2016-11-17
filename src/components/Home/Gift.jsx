import React, {PropTypes} from  'react';
import styles from "./Gift.less"
import { browserHistory,Router,Link } from 'react-router'
class Gift extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cut:"?imageMogr/v2/thumbnail/480x/interlace/1",
            image:"https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
        };
    }
    render() {
        const ts=this.state;
        const {id,image}=this.props;
        return (
            <Link className={styles.specialId} to={`/special/ ${id}`} >
                <img  className={styles.Img} src={`${(image || ts.image)}${ts.cut}` } alt=""/>
            </Link >
        )
    }
}

Gift.propTypes = {
    image:PropTypes.string, //大礼包图片
    id:PropTypes.number, //大礼包跳转Id
    type:PropTypes.number, //大礼包跳转Id
}

export default Gift