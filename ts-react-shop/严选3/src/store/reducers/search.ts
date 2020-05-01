import { actionType } from '../../utils/interface'

let initVal = {
  init: {},
  helperList: [],
  list: {}
}

function searchRuducer(state: any = initVal, action: actionType) {
  switch (action.type) {
    case 'SEARCH_INIT':
      return { ...state, init: { ...action.payload } }

    case 'HELPER_REDUCER':
      return { ...state, helperList: [...action.payload] }

    case 'LIST_REDUCER':
      return { ...state, list: { ...action.payload } }

    default:
      return state
  }
}

export default searchRuducer
