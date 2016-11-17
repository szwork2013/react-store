import React, {PropTypes} from "react";
import ActivityIndicator from "antd-mobile/lib/activity-indicator";
import "antd-mobile/lib/activity-indicator/style/index.css";

class AutoLoading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toast: true,
            text: "正在加载",
            animating: false
        };
    }

    render() {
        const ts=this.state;
        const {loadingType, loadingText,loading }=this.props;
        const loadingProps = {
            toast: loadingType || ts.toast,
            text: loadingText ||  ts.text ,
            animating: loading || ts.animating
        };
        return (
            <ActivityIndicator {...loadingProps} />
        )
    }
}

AutoLoading.propTypes = {
    loadingType: PropTypes.bool, //loading样式
    loadingText: PropTypes.string, //loading文字
    loading: PropTypes.bool, //是否显示
}

export default AutoLoading