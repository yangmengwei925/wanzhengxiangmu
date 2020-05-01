import { actionType } from '../../utils/interface'


function homeReudcer(state: any = {}, action: actionType) {
  switch (action.type) {
    case 'GET_HOME_LIST':
      return { ...state, ...action.payload }

    default:
      return state
  }
}


export default homeReudcer
