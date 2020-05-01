import axios from '../utils/request'

export let getCollectList = (typeId = "0") => axios.get("/collect/list", { params: { typeId } })

export let addorremove = (valueId: string, typeId: string) => axios.post("/collect/addordelete", { typeId, valueId })
