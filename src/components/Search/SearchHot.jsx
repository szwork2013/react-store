import React, {PropTypes} from  'react';
import { browserHistory,Router,Link } from 'react-router'
import styles from "./SearchHot.less";
class SearchHot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"热门搜索",
            hot:[]
        };
    }
    render() {
        const ts=this.state;
        const {hot,title}=this.props;
        const tags=(hot || ts.hot).map((item,index)=>{
            return <Link to={`/search/${item.Keyword}`} key={index}> {item.Keyword} </Link>
        })
        return (
            <div className={styles.searchHot}>
                <p>
                    {title||ts.title}
                </p>
                <div >
                    {tags}
                </div>
            </div>
        )
    }
}

SearchHot.propTypes = {
    title:PropTypes.string, //标题
    hot:PropTypes.array, //热门关键词
}

export default SearchHot