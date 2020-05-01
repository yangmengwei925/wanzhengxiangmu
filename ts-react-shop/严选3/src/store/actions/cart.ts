import { getCartList, changeChecked, removeCart, addandremoveCart } from '../../api'

export let cartListAction = () => {
  return async (dispatch: Function) => {
    let res = await getCartList();
    if (res.data) {
      res.data.cartList.forEach((item: any) => {
        item.checkeds = 0
      })
      dispatch({
        type: "CART_LIST_REDUCER",
        payload: res.data
      })
    }
  }
}

export let editCheckedAction = (list: any, item: any, type: any = "checked") => {
  return async (dispatch: Function) => {
    if (type == "all") {
      list.cartList.forEach((it: any) => { it.checkeds = item == !!0 ? 0 : 1 })
    } else {
      console.log(list,item,"--------------------")
      let findInd = list.cartList.findIndex((it: { id: number; }) => it.id == item.id)
      list.cartList[findInd].checkeds = item.checkeds == 0 ? 1 : 0;
    }
    dispatch({
      type: "CART_LIST_REDUCER",
      payload: list
    })

  }
}

export let checkedAction = (isChecked: number, productId: string) => {
  return async (dispatch: Function) => {
    let res = await changeChecked(isChecked, productId);
    console.log(res)
    if (res.data) {
      dispatch({
        type: "CART_LIST_REDUCER",
        payload: res.data
      })
    }
  }
}

// 删除
export let removeAction = (productIds: string) => {
  return async (dispatch: Function) => {
    let res = await removeCart(productIds);
    console.log(res)
    if (res.data) {
      dispatch({
        type: "CART_LIST_REDUCER",
        payload: res.data
      })
    }
  }
}

// ++ ---
export let addandremoveAction = (list: any, goodsId: string, id: string, number: number, productId: string) => {
  return async (dispatch: Function) => {
    let res = await addandremoveCart(goodsId, id, number, productId);
    res.data.cartList.forEach((item: any) => {
      list.forEach((it: any) => {
        item.checkeds = it.checkeds
      })
    })
    console.log(res)
    if (res.data) {
      dispatch({
        type: "CART_LIST_REDUCER",
        payload: res.data
      })
    }
  }
}
