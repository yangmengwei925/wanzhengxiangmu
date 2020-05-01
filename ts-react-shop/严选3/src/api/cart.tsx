import axios from '../utils/request'

export let getCartList = () => axios.get("/cart/index")

export let changeChecked = (isChecked: number, productIds: string) => axios.post("/cart/checked", { isChecked, productIds })

export let removeCart = (productIds: string) => axios.post("/cart/delete", { productIds })

// ++ --
export let addandremoveCart = (goodsId: string, id: string, number: number, productId: string) => axios.post("/cart/update", { goodsId, id, number, productId }) 
