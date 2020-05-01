import { subject } from '../../api'


export let subjectAction = (size: number, page: number) => {
  return async (dispatch: Function) => {
    let res = await subject(size, page);
    if (res.data.data && res.data.data.length > 0) {
      dispatch({
        type: "SUBGECT_REDUCER",
        payload: res.data.data
      })
    }
  }
}
