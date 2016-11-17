import React, {PropTypes} from  'react';
import HalfGroup from "../Common/HalfGroup";
import styles from "./ProjectGroup.less";

class ProjectGroup extends React.Component {
    render() {
        let {model,overChange}=this.props;
        const group=(model || []).map((item,index)=>{
            return <div className={styles.group} key={index}>
                    <p > <span>{item.Title} </span></p>
                    <li><span>{item.SubTitle}</span></li>
                    <HalfGroup key="1" model={item.Goods} overChange={overChange}/>
                </div>
        });
        return <div>{group}</div>
    }
}

ProjectGroup.propTypes = {
    model:PropTypes.array, //专题
    overChange:PropTypes.func, //拉到底触发事件
};

export default ProjectGroup