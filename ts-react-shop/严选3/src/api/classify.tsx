import axios from '../utils/request'

export let classify = () => axios.get("/catalog/index");

export let contentList = (id: number) => axios.get("/catalog/current", { params: { id } });

export let classifyDetail = (id: string) => axios.get("/goods/category", { params: { id } });

export let classifyDetailList = (categoryId: string, page: string = '1', size: string = '100') => axios.get("/goods/list", { params: { categoryId, page, size } })