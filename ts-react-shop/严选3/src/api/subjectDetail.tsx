import axios from '../utils/request'

export let subjectDetail = (id: number) => axios.get("/topic/detail", { params: { id } })

export let getComment = (params: object) => axios.get("/comment/list", { params })

export let getSubject = (id: number) => axios.get("/topic/related", { params: { id } })