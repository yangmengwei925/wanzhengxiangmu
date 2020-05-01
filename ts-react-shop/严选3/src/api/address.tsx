import axios from '../utils/request'

export let getAddressList = () => axios.get("/address/list")

export let addAddress = (params: object) => axios.post("/address/save", params)

export let removeAddress = (id: string) => axios.post("/address/delete", { id })