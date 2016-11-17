import request from '../utils/Request';
import qs from 'qs';

export async function getHomeData() {
    return request(`/api/home/index`);
}
export async function getProjectData(params) {
    return request(`/api/home/category/${params}`)
}
export async function getSpecial(params) {
    return request(`/api/home/special/${params}`);
}
export async function getGoods(params) {
    return request(`/api/goods/${params}`);
}
export async function getBrandData(){
    return request(`/api/home/goodsBrand/1055`);
}
export async function getNewGoodsData(){
    return request(`/api/home/dailyNewGoods/more`);
}
export async function getCommendData(){
    return request(`/api/home/recommend/more`);
}
export async function getSearchLog(){
    return request(`/api/home/hotkey`);
}
export async function getSearchHot(){
    return request(`/api/home/hotkey`);
}
export async function getSearchGoods(params) {
    return request(`/api/home/search/?${qs.stringify(params)}`, {
        method: "get",
    });
}
