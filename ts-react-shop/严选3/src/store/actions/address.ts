import { getAddressList } from '../../api'

export let getAddressListAction = () => {
  return async (dispatch: Function) => {
    let res = await getAddressList();
    console.log(res)
    if (res.data) {
      dispatch({
        type: "GET_ADDRESS_LIST",
        payload: res.data
      })
    }
  }
}

