import React, {PropTypes} from  'react';
import 'antd-mobile/lib/badge/style/index.css';
import { hashHistory,Router,Link } from 'react-router'
import 'antd-mobile/lib/tab-bar/style/index.css';
import TabBar from  'antd-mobile/lib/tab-bar';
import styles from  './ToolBar.less';
import Toast from "antd-mobile/lib/toast";
import "antd-mobile/lib/toast/style/index.css";

class BagBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden:false
        };
    }
    render() {
        const ts=this.state;
        const {selected,badge,hidden}=this.props;
        return (
            <div className={styles.table}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={ hidden || ts.hidden}
                >
                    <TabBar.Item
                        title="首页"
                        key="首页"
                        icon={{uri:'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png'}}
                        selectedIcon={{uri:'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png'}}
                        selected={selected === 'home'}
                        onPress={() => {
                            hashHistory.push('/')
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/EljxLrJEShWZObW.png' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/LWNaMdwAFSmYBFw.png' }}
                        title="品牌馆"
                        key="品牌馆"
                        selected={selected === "brand"}
                        onPress={() => {
                            hashHistory.push('/brand')
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
                        title="购物袋"
                        key="购物袋"
                        badge={badge}
                        selected={selected === "bag"}
                        onPress={() => {
                            Toast.info('购物袋尚未完成!敬请期待!', 1)
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/YWpPVCVOnJoCYhs.png' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/WadBBxOIZtDzsgP.png' }}
                        title="我的"
                        key="我的"
                        selected={selected === "my"}
                        onPress={() => {
                            Toast.info('用户中心尚未完成!敬请期待!', 1)
                        }}
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}

BagBar.propTypes = {
    selected:PropTypes.string,//选中的table
    hidden:PropTypes.bool, //是否显示
    badge:PropTypes.number //购物袋数量
}

export default BagBar