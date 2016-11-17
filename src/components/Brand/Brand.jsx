import React, {PropTypes} from  'react';
import SmallCard from "./SmallCard";
import styles from "./Brand.less"

class Brand extends React.Component {
    render() {
        let {model}=this.props;
        const group=(model || []).map((item,index)=>{
            return <div  key={index} className={styles.group}>
                <p > <span>{item.Name} </span></p>
                <SmallCard  model={item.Brands}/>
            </div>
        });
        return <div>{group}</div>
    }
}

Brand.propTypes = {
    model:PropTypes.array, //专题
    overChange:PropTypes.func, //滑动到底部触发事件
};

export default Brand