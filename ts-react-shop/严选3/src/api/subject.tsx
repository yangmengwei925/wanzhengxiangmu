import axios from '../utils/request'

export let subject = (size: number, page: number) => axios.get("/topic/list", { params: { size, page } })