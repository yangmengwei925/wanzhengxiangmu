import {addorremove } from '../../api/collect'

export let addCollectAction = (valueId: string, typeId: string) => {
  return async (dispatch: Function) => {
    let res = await addorremove(valueId,typeId);
    console.log(res,'res')
    if (res.data) {
      dispatch({
        type: 'GET_ADDCOLLECT_ACTION',
        payload: res.data
      })
    }
  }
}