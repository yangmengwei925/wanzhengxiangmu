import { actionType } from '../../utils/interface'

const initVal = {
  data: []
}

function subjectReducer(state: any = initVal, action: actionType) {
  switch (action.type) {
    case "SUBGECT_REDUCER":
      return { ...state, data: state.data.concat(action.payload) };

    default:
      return state;
  }
}

export default subjectReducer
