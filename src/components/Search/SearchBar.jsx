import React, {PropTypes} from  'react';
import { browserHistory,Router,Link } from 'react-router'
import Icon from 'antd-mobile/lib/icon';
import  'antd-mobile/lib/icon/style/index.css';
import styles from "./SearchBar.less";
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder:"商品名称",
            searchKey:"",
        };
    }
    render() {
        const ts=this.state;
        const {searchKey,placeholder,changeKey}=this.props;
        return (
            <div className={styles.searchTop}>
                <div className={styles.searchBar}>
                    <p>
                        <Link to="/">
                            <Icon type="left" />
                        </Link>
                    </p>
                    <div >
                        <input type="text" placeholder={placeholder || ts.placeholder} onChange={(input)=>{changeKey(input.target.value)}} value={searchKey || ts.searchKey} />
                        <Link to={`/search/${searchKey || ts.searchKey}`}>
                            <Icon type="search" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

SearchBar.propTypes = {
    placeholder:PropTypes.string, //输入框内placeholder
    searchKey:PropTypes.string, //搜索关键词
    changeKey:PropTypes.func //改变搜索关键字
}

export default SearchBar