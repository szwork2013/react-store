import React, {PropTypes} from  'react';
import { browserHistory,Router,Link } from 'react-router'
import styles from "./SearchLog.less";
class SearchLog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"历史搜索",
            logNone:"搜索历史为空",
            log:[]
        };
    }
    render() {
        const ts=this.state;
        const {log,title,clearLog,logNone}=this.props;
        const tags=(log || ts.log).map((item,index)=>{
            return <Link to={`/search/${item.Keyword}`} key={index}> {item.Keyword} </Link>
        })
        return (
            <div className={styles.searchLog}>
                <p>
                    {title||ts.title}
                </p>
                <div style={{display:log.length==0?"none":"block"}}>
                    {tags}
                </div>
                <div className={styles.none} style={{display:log.length==0?"block":"none"}}>
                    {logNone || ts.logNone}
                </div>
                <input type="button" value="清空历史记录" onClick={()=>{ clearLog()}} style={{display:log.length==0?"none":"block"}}/>
            </div>
        )
    }
}

SearchLog.propTypes = {
    title:PropTypes.string, //标题
    log:PropTypes.array, //历史记录
    logNone:PropTypes.string, //当无历史数据时显示
    clearLog:PropTypes.func, //清除历史记录
}

export default SearchLog