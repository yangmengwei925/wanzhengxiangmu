import axios from '../utils/request'

export let searchInit = () => axios.get("/search/index")

export let helper = (keyword: string) => axios.get("/search/helper", { params: { keyword } })

export let list = (keyword: string, sort: string = "id", order: string = "asc", page: string = "1", size: string = "100") => axios.get("/goods/list", { params: { keyword, sort, order, page, size } })

export let removeHistory = () => axios.get("/search/clearhistory")