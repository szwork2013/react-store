import React, {PropTypes} from  'react';
import { browserHistory,Router,Link } from 'react-router'
import styles from "./SearchType.less";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            table:[
                {
                    name:"默认",
                    type:1,
                }, {
                    name:"销量",
                    type:2
                },{
                    name:"价格",
                    type:3
                }
            ],
            searchKey:"",
        };
    }
    render() {
        const ts=this.state;
        const {selected,changeSelected}=this.props;
        const table=ts.table.map((item,index)=>{
            return <div onClick={()=>{changeSelected(item.type)}} key={index} className={selected==item.type?styles.selected:styles.normal}>
                {item.name}
            </div>
        })
        return (
            <div className={styles.tableTop}>
                <div className={styles.table}>
                    {table}
                </div>
            </div>
        )
    }
}

SearchBar.propTypes = {
    selected:PropTypes.number, //输入框内placeholder
    changeSelected:PropTypes.func, //改变选中table
}

export default SearchBar