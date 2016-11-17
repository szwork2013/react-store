import React, {PropTypes} from  'react';
import { browserHistory,Router,Link } from 'react-router';
import styles from "./GoodsCard.less"

class GoodsCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model: {},
            type: "normal",
            cut:"?imageMogr/v2/thumbnail/480x/gravity/Center/crop/480x270/interlace/1"
        }
    }
    render() {
        const ts=this.state;
        const {model,type,typeKey,linkType}=this.props;
        const card=()=>{
            let link=()=>{
                switch (linkType || model.Type){
                    case 1:
                        return ("description/"+model.Id)
                    case 2:
                        return ("special/"+model.Id)
                    default:
                        return "/"
                }
            }
            let box=()=>{switch (type || ts.type){
                case "normal":
                    return <div>
                        <img src={`${model.ImgAccessKey}${ts.cut}`} alt={model.Name} />
                        <p>{model.Name}</p>
                        <span>{model.Desc}</span>
                    </div>
                case "hot":
                    return <div>
                        <img src={`${model.ImgAccessKey}${ts.cut}`} alt={model.Name}/>
                        <p>{model.Name}</p>
                        <span> {model.Desc}<del>{model.LowPrice}</del></span>
                    </div>
                case "group":
                    switch (typeKey){
                        case 1:
                            return<div >
                                    <i><img src={`${model.ImgAccessKey}${ts.cut}`} alt={model.Name} /><b >疯抢中</b></i>
                                    <p>{model.Name}</p>
                                    <span>{model.Desc}</span>
                                    <li><span>{model.LowPrice }</span><del>{model.HighPrice}</del></li>
                                </div>
                        case 2:
                            return <div className={styles.cardDark}>
                                <i><img src={`${model.ImgAccessKey}${ts.cut}`} alt={model.Name} /><b >即将开抢</b></i>
                                <p>{model.Name}</p>
                                <span>{model.Desc}</span>
                                <li><span>{model.LowPrice }</span><del>{model.HighPrice}</del></li>
                            </div>
                    }
                }
            }
            return <Link className={styles.card} to={link()}> {box()}</Link>
        }
        return card()
    }
}

GoodsCard.propTypes = {
    model:PropTypes.object , //商品信息
    type:PropTypes.string, //卡片类型 {"group","normal","hot" }
    linkType:PropTypes.number, //跳转类型
    typeKey:PropTypes.number //卡片状态
}

export default GoodsCard