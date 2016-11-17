/*菜单和Url映射表*/
import Description from "../routes/Description";
import Special from "../routes/Special";
import Project from "../routes/Project";
import Home from "../routes/Home";
import Brand from "../routes/Brand";
import NewGoods from "../routes/NewGoods";
import Commend from "../routes/Commend";
import Search from "../routes/Search";
import SearchGoods from "../routes/SearchGoods";
import Member from "../routes/Member";

let Navigation = [{
    url: '/',
    component: Home,
},{
    url: 'description/:id',
    component: Description,
},{
    url: 'special/:id',
    component: Special,
},{
    url: 'project/:id',
    component: Project,
},{
    url: 'brand',
    component: Brand,
},{
    url: 'newGoods',
    component: NewGoods,
},{
    url: 'commend',
    component: Commend,
},{
    url: 'search',
    component: Search,
},{
    url: 'search/:key',
    component: SearchGoods,
},{
    url: 'member/:id',
    component: Member,
    links: [{
        url: 'system',
        component: Member,
    }]
}];

export default Navigation;