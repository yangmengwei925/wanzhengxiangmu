import { actionType } from '../../utils/interface'

let initVal = {
  list: {}
}

function cartReducer(state: any = initVal, action: actionType) {
  switch (action.type) {
    case 'CART_LIST_REDUCER':
      return { ...state, list: { ...action.payload } }

    default:
      return state
  }
}

export default cartReducer
