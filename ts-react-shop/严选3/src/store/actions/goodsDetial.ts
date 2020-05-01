
import {getGoodsDetial} from '../../api';

export let GoodsDetialAction = (id:number) => {
    return async (dispatch: Function) => {
      let res = await getGoodsDetial(id);
      console.log(res,"-----------")
      if (res.data) {
        dispatch({
          type: "GET_GOODSDETIAL_LIST",
          payload: res.data
        })
      }
    }
  }
