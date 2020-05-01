import { actionType } from '../../utils/interface'
import { setToken, removeToken } from '../../utils/index'

const initVal = {
  isLogin: false
}

function loginReducer(state: any, action: actionType) {
  switch (action.type) {
    case 'LOGIN':
      setToken(action.payload.sessionKey)
      return { ...state, isLogin: !!action.payload.sessionKey }
    case 'LOGOUT':
      removeToken()
      return { ...state, isLogin: false }
    default:
      return state;
  }
}

export default (state = initVal, action: actionType) => loginReducer(state, action)
