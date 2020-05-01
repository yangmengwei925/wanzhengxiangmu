import { searchInit, helper, list, removeHistory } from '../../api'


export let hotandhistoryAction = () => {
  return async (dispatch: Function) => {
    let res = await searchInit();
    if (res.data) {
      dispatch({
        type: "SEARCH_INIT",
        payload: res.data
      })
    }
  }
}

export let helperAction = (keyword: string) => {
  return async (dispatch: Function) => {
    let res = await helper(keyword);
    if (res.data) {
      dispatch({
        type: "HELPER_REDUCER",
        payload: res.data
      })
    }
  }
}

export let listAction = (keyword: string, sort: string = "id", order: string = "asc") => {
  return async (dispatch: Function) => {
    let res = await list(keyword, sort, order);
    if (res.data) {
      dispatch({
        type: "LIST_REDUCER",
        payload: res.data
      })
    }
  }
}

export let removeAction = () => {
  return async (dispatch: Function) => {
    let res = await removeHistory()
  }
}
