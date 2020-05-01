import axios from '../utils/request'

export const getGoodsDetial = (id:number) => axios.get("/goods/detail",{params:{id}});
