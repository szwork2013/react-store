import React, {PropTypes} from  'react';
import Badge from 'antd-mobile/lib/badge';
import 'antd-mobile/lib/badge/style/index.css';
import styles from "./BagBar.less"

let time = 0;
class BagBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            badge: 0,
            warning: false,
        };
    }

    componentDidUpdate() {
        const {warning, number}=this.props
        if (warning >= number && time == 0) {
            this.setState({warning: true})
            setTimeout(()=> {
                this.setState({warning: false})
            }, 5000)
            time = 1
        }
    }

    componentWillUnmount() {
        time = 0
    }

    render() {
        const ts = this.state;
        const {badge, joinBag, clickBag, callService}=this.props;
        return (
            <div className={styles.bagBar}>
                <div className={styles.bagBarList}>
                    <div className={styles.bagBarBag} onClick={()=> clickBag()}>
                        <Badge text={ badge || ts.badge}>
                            <span className={styles.bagBarLine}>购物袋</span>
                        </Badge>
                    </div>
                    <div className={styles.service} onClick={()=> callService()}>
                        客服
                    </div>
                    <div className={styles.join} onClick={()=> joinBag()}>
                        <div className={styles.none} style={{display: ts.warning ? "block" : "none"}}>
                            库存告急,赶紧下手~
                        </div>
                        加入购物袋
                    </div>

                </div>
            </div>
        )
    }
}

BagBar.propTypes = {
    badge: PropTypes.number, //购物袋中该商品数量
    clickBag: PropTypes.func, //点击购物袋触发事件
    joinBag: PropTypes.func, //点击加入购物袋触发事件
    callService: PropTypes.func, //点击客服触发事件
    warning: PropTypes.number, //商品预警数量
    number: PropTypes.number, //商品库存数量
}

export default BagBar