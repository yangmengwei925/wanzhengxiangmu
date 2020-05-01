import { subjectDetail, getComment, getSubject } from '../../api'


export let subjectDetailAction = (id: number) => {
  return async (dispatch: Function) => {
    let res = await subjectDetail(id);
    if (res.data) {
      dispatch({
        type: "SUBGECT_DETAIL_REDUCER",
        payload: res.data
      })
    }
  }
}

export let commentAction = (params: object) => {
  return async (dispatch: Function) => {
    let res = await getComment(params);
    if (res.data.data) {
      dispatch({
        type: "COMMENT_REDUCER",
        payload: res.data.data
      })
    }
  }
}

export let subjectAction = (id: number) => {
  return async (dispatch: Function) => {
    let res = await getSubject(id);
    if (res.data) {
      dispatch({
        type: "SUBJECT_REDUCER",
        payload: res.data
      })
    }
  }
}
