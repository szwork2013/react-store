import React, {PropTypes} from  'react';

class PromiseBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cut:"?imageMogr/v2/thumbnail/480x/interlace/1",
            image:"https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
        }
    }
    render() {
        const ts=this.state;
        const {image}=this.props;
        return (
            <div style={{backgroundColor:"#fff",padding:"4% 12%"}}>
                <img src={`${image || ts.image }${ts.cut}`} alt="" style={{width:"100%"}} />
            </div>
        )
    }
}

PromiseBar.propTypes = {
    image:PropTypes.string, //品牌保证地址
}

export default PromiseBar