import { actionType } from '../../utils/interface'

const initVal = {
  detailItem: {},
  commentList: [],
  subjectList: []
}

function subjectReducer(state: any = initVal, action: actionType) {
  switch (action.type) {
    case "SUBGECT_DETAIL_REDUCER":
      return { ...state, detailItem: { ...action.payload } }

    case "COMMENT_REDUCER":
      return { ...state, commentList: [...action.payload] }

    case "SUBJECT_REDUCER":
      return { ...state, subjectList: [...action.payload] }

    default:
      return state
  }
}

export default subjectReducer
