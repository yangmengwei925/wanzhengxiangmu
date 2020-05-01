import { actionType } from '../../utils/interface'

const initVal = {
  
}

function addCollectReducer(state: any = initVal, action: actionType) {
  switch (action.type) {
    case 'GET_ADDCOLLECT_ACTION':
      return { ...state, ...action.payload}

    default:
      return state
  }
}

export default addCollectReducer
