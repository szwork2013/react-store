import React, {PropTypes} from  'react';
import { browserHistory,Router,Link } from 'react-router'
import NavBar from 'antd-mobile/lib/nav-bar';
import  'antd-mobile/lib/nav-bar/style/index.css'
import Icon from 'antd-mobile/lib/icon';
import  'antd-mobile/lib/icon/style/index.css'
import "./ReturnBar.css"

class ReturnBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leftContent: "返回",
            rightIcon:[
                <Icon type="export" key="export" onClick={() => this.onShareClick()}/>,
            ],
            leftIcon:　"left",
            mode:"light",
            children:"",
            onLeftClick:  this.onLeftClick
        };
    }
    onLeftClick(){
        browserHistory.goBack()
    }
    onShareClick(){
        const {shareClick}=this.props;
        shareClick()
    }
    render() {
        const ts=this.state;
        const {text,rightIcon,leftIcon,mode,children,onLeftClick,shareClick}=this.props;
        const navBarProps={
            leftContent:text || ts.leftContent,
            mode:mode || ts.mode,
            iconName:leftIcon || ts.leftIcon ,
            onLeftClick:onLeftClick  || ts.onLeftClick,
            rightContent:rightIcon  || ts.rightIcon,
        };
        return (
            <div className="navBar">
                <NavBar {...navBarProps}>
                    {children || ts.children}
                </NavBar>
            </div>
        )
    }
}

ReturnBar.propTypes = {
    children:PropTypes.any, //导航内容
    text:PropTypes.any, //导航左边内容
    leftIcon:PropTypes.string, //左边icon name
    rightIcon:PropTypes.array, //导航右边内容
    mode:PropTypes.string,  //导航模式 {'dark', 'light'}
    onLeftClick:PropTypes.func,  //导航左边点击回调
    shareClick:PropTypes.func  //导航右边分享回调
}

export default ReturnBar