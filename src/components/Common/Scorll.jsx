import React, {PropTypes} from  'react';
import Toast from "antd-mobile/lib/toast";
import  'antd-mobile/lib/icon/style/index.css'

class Scorll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            top:true
        };
    }
    componentDidMount() {
        document.onscroll = ()=> {
            const {top,block,center,over}=this.props;
            let t, h, c;
            if (document.documentElement && document.documentElement.scrollTop) {
                t = document.documentElement.scrollTop;
                c = document.documentElement.clientHeight;
            } else {
                t = document.body.scrollTop;
                c = document.body.clientHeight;
                h = document.body.scrollHeight;
            }
            Toast.hide()
            if (t == 0 && top) {
                top()
            }
            else if (c + t == h && over) {
                over()
            }
            else if (c > t  && block) {
                block()
            }
            else if (c + t != h && center){
                center()
            }
        }
    }

    componentWillUnmount() {document.onscroll = ()=> {}}

    render() {return null}
}

Scorll.propTypes = {
    top: PropTypes.func, //滚动条在顶部触发事件
    block:PropTypes.func, //滚动条在第一页触发事件
    center: PropTypes.func, //滚动条第一页以后触发事件
    over: PropTypes.func, //滚动条在底部触发事件
}

export default Scorll