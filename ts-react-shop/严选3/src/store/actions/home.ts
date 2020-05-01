import { getHomeList } from '../../api'

export let homeAction = () => {
  return async (dispatch: Function) => {
    let res = await getHomeList();
    if (res.data) {
      dispatch({
        type: "GET_HOME_LIST",
        payload: res.data
      })
    }
  }
}
