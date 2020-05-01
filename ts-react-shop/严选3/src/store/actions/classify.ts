import { classify, contentList, classifyDetail, classifyDetailList } from '../../api'

// 分类左tab
export let classifyAction = () => {
  return async (dispatch: Function) => {
    let res = await classify();
    if (res.data.categoryList) {
      dispatch({
        type: "GET_CLASSIFY_LIST",
        payload: res.data.categoryList
      })
    }
  }
}

// 分类右content
export let contentAction = (id: number) => {
  return async (dispatch: Function) => {
    let res = await contentList(id);
    if (res.data.currentCategory) {
      dispatch({
        type: "GET_CONTENT_LIST",
        payload: res.data.currentCategory
      })
    }
  }
}

// 奇趣分类nav
export let classifyDetailAction = (id: string) => {
  return async (dispatch: Function) => {
    let res = await classifyDetail(id);
    if (res.data) {
      dispatch({
        type: "GET_CLASSIFYDETAIL_LIST",
        payload: res.data
      })
    }
    console.log(res.data)
  }
}

// 奇趣分类list
export let DetailListAction = (categoryId: string) => {
  return async (dispatch: Function) => {
    let res = await classifyDetailList(categoryId);
    if (res.data.data) {
      dispatch({
        type: "GET_DETAILLIST_LIST",
        payload: res.data.data
      })
    }
    console.log(res.data.data)
  }
}