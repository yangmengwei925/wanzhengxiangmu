import { actionType } from '../../utils/interface'

function GoodsDetial(
    state:any={},action:actionType
){
  switch (action.type){
      case 'GET_GOODSDETIAL_LIST':
          return {...state,...action.payload}
      default:
          return state
  }
}


export default GoodsDetial;