import { actionType } from '../../utils/interface'

const initVal = {
  data: [],
  contentItem: {},
  detailNav: {},
  detailList: []
}

function classifyReducer(state: any = initVal, action: actionType) {
  switch (action.type) {
    case 'GET_CLASSIFY_LIST':
      return { ...state, data: [...action.payload] }

    case 'GET_CONTENT_LIST':
      return { ...state, contentItem: { ...action.payload } }

    case 'GET_CLASSIFYDETAIL_LIST':
      return { ...state, detailNav: { ...action.payload } }

    case 'GET_DETAILLIST_LIST':
      return { ...state, detailList: [...action.payload] }

    default:
      return state
  }
}

export default classifyReducer
