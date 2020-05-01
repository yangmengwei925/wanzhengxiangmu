import { actionType } from '../../utils/interface'

const initVal = {
  data: []
}

function addressReducer(state: any = initVal, action: actionType) {
  switch (action.type) {
    case 'GET_ADDRESS_LIST':
      return { ...state, data: [...action.payload] }

    default:
      return state
  }
}

export default addressReducer
