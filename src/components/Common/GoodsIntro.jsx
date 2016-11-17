import React, {PropTypes} from  'react';
import styles from "./GoodsIntor.less"
class GoodsIntro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content:"更多美食尽在逛食记APP",
            text:"逛食记精选",
            logo:"https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
        };
    }
    render() {
        const ts=this.state;
        const {content,text,logo}=this.props;
        return (
            <div className={styles.intro}>
                <span className={styles.introIcon} style={{backgroundImage:"url("+(logo || ts.logo)+ ")"}}>{ text || ts.text }</span>
                <p className={styles.introContent}>{content || ts.content}</p>
            </div>
        )
    }
}

GoodsIntro.propTypes = {
    content: PropTypes.string, //商品简介
    text: PropTypes.string, // 精选文字
    logo: PropTypes.string,  // 精选图标Log
}

export default GoodsIntro