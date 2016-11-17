import React, {PropTypes} from  'react';
import ReactSwipe from 'react-swipe';
import { browserHistory,Router,Link } from 'react-router'

class RunBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            continuous: false,
            type:  "show",
            img:  "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png",
            dots: false,
            stop: false,
            cut:"?imageMogr/v2/thumbnail/480x/gravity/Center/crop/480x270/interlace/1"
        };
    }
    render() {
        const ts=this.state;
        const {continuous,type,banner,dots,stop}=this.props;
        const bannerSetting={
            continuous:continuous || ts.continuous,
            disableScroll: dots || ts.dots,
            stopPropagation: stop || ts.stop,
        }
        const showType=type || ts.type;
        const imgList=(banner || []).map((item,index)=>{
            switch (showType){
                case "show":
                    return <div key={index}><img src={`${item || ts.img }${ts.cut}`} style={{width:"100%"}} /></div>
                case "link":
                    return <div key={index}><Link to={`special/${item.Id}`} style={{display:"inline-block",width:"100%" }}><img src={`${item.ImgAccessKey || ts.img}${ts.cut}`} style={{width:"100%"}} /> </Link></div>
                default:
                    return <div key={index}><img src={`${item || ts.img}${ts.cut}`} style={{width:"100%"}} /></div>
            }
        })

        return (
            <ReactSwipe {...bannerSetting} key={imgList.length} >
                {imgList}
            </ReactSwipe>
        )
    }
};

RunBanner.propTypes = {
    continuous: PropTypes.bool, //是否循环播放
    type: PropTypes.string, //轮播显示类型 {"link" , "show"}
    banner: PropTypes.array, //循环播放内容
    dots:PropTypes.bool, //是否指示点
};

export default RunBanner;
