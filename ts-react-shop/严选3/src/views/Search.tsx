import React, { useEffect, useState } from 'react';
import styles from './Search.module.scss'
import { connect } from 'react-redux'
import { hotandhistoryAction, helperAction, listAction, removeAction } from '../store/actions/search'
import { RouteComponentProps } from 'react-router-dom'

interface dispatchType {
  getSearchInit: Function,
  helper: Function,
  getList: Function,
  removeHistory: Function
}

interface stateType {
  init: {
    defaultKeyword: {
      keyword: string
    },
    historyKeywordList: Array<{
      [key: string]: string | number
    }>
    hotKeywordList: Array<{
      [key: string]: string | number
    }>
  },
  helperList: [],
  list: {
    goodsList: Array<{
      [key: string]: string | number
    }>
  }
}

let Search: React.FC<dispatchType & stateType & RouteComponentProps> = (props) => {

  let [keyword, setKeyword] = useState("")
  let [keywords, setKeywords] = useState("")
  let [isShow, setIsShow] = useState(false)
  let [isShows, setIsShows] = useState(false)
  let [listShow, setListShow] = useState(false)
  let [sortShow, setSortShow] = useState(false)
  let [sortimgShow, setSortimgShow] = useState(false)
  let [initsortShow, setInitsortShow] = useState(false)

  useEffect(() => {
    setInitsortShow(true)
    props.getSearchInit()
  }, [])

  useEffect(() => {
    if (keyword != keywords) {
      setListShow(false)
    }
    if (keyword != "" && keyword != keywords) {
      // console.log("非空-------")
      setIsShow(true)
      setIsShows(false)
      props.helper(keyword)
    } else if (keyword != "" && keyword === keywords) {
      setIsShow(true)
      setIsShows(true)
      // console.log("else if--------")
    }
    else {
      // console.log(1, "-----------")
      setIsShow(false)
    }
  }, [keyword])

  useEffect(() => {
    if (keyword == "") return;
    if (Object.keys(props.list).length) {
      setListShow(true)
    }
  }, [props.list])

  useEffect(() => {
    if (!initsortShow) return;
    if (sortimgShow) {
      props.getList(keyword, "price", "asc")
    } else {
      props.getList(keyword, "price", "desc")
    }
  }, [sortimgShow])

  let changeValue = (e: any) => {
    setKeyword(e.target.value)
  }

  let clickSearch = (value: string) => {
    setKeywords(value)
    setKeyword(value)
    setSortShow(false)
    setSortimgShow(false)
    // setIsShow(false)

    props.getList(value)
    props.getSearchInit()
  }

  // 综合
  let allSort = () => {
    setSortShow(false)
    setSortimgShow(false)
    setInitsortShow(false)
    props.getList(keyword)
  }

  // 价格
  let priceSort = () => {
    setInitsortShow(true)
    setSortShow(true)
    setSortimgShow(!sortimgShow)
  }


  return (
    <div className={styles.Search}>

      {/* 搜索框 */}
      <div className={styles.searchFix}>
        <div className={styles.Input}>
          <div className={styles.searchInputWrap}>
            <div className={styles.goBack} onClick={() => { props.history.go(-1) }}>
              <i className="iconfont icon-zuojiantou"></i>
            </div>
            <div className={styles.icon}>
              <i className="iconfont icon-fangdajing"></i>
            </div>
            {
              props.init.defaultKeyword && <input type="text"
                value={keyword}
                onChange={changeValue}
                placeholder={props.init.defaultKeyword.keyword + ''}
                className={styles.searchInput} />
            }
            <div className={styles.cancelSearch} onClick={() => { setKeyword("") }}>取消</div>
          </div>
          <ul className={styles.searchList + ` ${isShow ? "" : styles.ulShow} ${listShow ? styles.ulShow : ""} ${isShows ? styles.ulShow : ""}`}>
            {
              props.helperList.map((item, index) => {
                return (
                  <li className={styles.searchItem}
                    onClick={() => { clickSearch(item) }}
                    key={index}>{item}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
      {/* history-and-hot */}
      <div className={styles.searchMsg + ` ${isShow ? styles.isShow : ""}`}>
        {
          props.init.historyKeywordList && props.init.historyKeywordList.length > 0 && <div className={styles.searchItemWrap}>
            <div className={styles.title}>
              历史记录
            <i className="iconfont icon-lajitong" onClick={() => { props.removeHistory(); props.getSearchInit() }}></i>
            </div>
            <div className={styles.listWarp}>
              {
                props.init.historyKeywordList.map((item, index) => {
                  return (
                    <button className={styles.listItem} onClick={() => { clickSearch(item + "") }} key={index}>{item}</button>
                  )
                })
              }
            </div>
          </div>
        }
        <div className={styles.searchItemWrap}>
          <div className={styles.title}>热门搜索</div>
          <div className={styles.listWarp}>
            {
              props.init.hotKeywordList && props.init.hotKeywordList.map((item, index) => {
                return (
                  <button className={styles.listItem + ` ${item.is_hot === 1 ? styles.hot : ""}`}
                    onClick={() => { clickSearch(item.keyword + "") }}
                    key={index}>{item.keyword}</button>
                )
              })
            }
          </div>
        </div>
      </div>
      {/* 搜索list */}
      <div className={styles.searchGoods + ` ${listShow ? "" : styles.listShow}`}>
        {/* 头部 */}
        <div className={styles.searchConditionWrap}>
          <div className={styles.searchCondition}>
            <div className={sortShow ? "" : styles.active} onClick={allSort}>综合</div>
            <div className={sortShow ? styles.active : ""} onClick={priceSort}>价格
            {
                !sortShow && <img src="./img/sort.png" alt="" className={styles.sortPrice} />
              }
              {
                sortShow && sortimgShow && <img src="./img/sort (1).png" alt="" className={styles.sortPrice} />
              }
              {
                sortShow && !sortimgShow && <img src="./img/sort (2).png" alt="" className={styles.sortPrice} />
              }
            </div>
            <div className={styles.chooseCategory}>全部分类</div>
          </div>
        </div>
        {/* 列表 */}
        <div className={styles.goodsList}>
          {
            props.list.goodsList && props.list.goodsList.map((item) => {
              return (
                <a href="" className={styles.goodsItem} key={item.id}>
                  <div className={styles.goodsItemImg}>
                    <img src={item.list_pic_url + ''} alt="" />
                  </div>
                  <div className={styles.goodsItemName}>{item.name}</div>
                  <div className={styles.goodsItemPrice}>￥{item.retail_price}元</div>
                </a>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    init: state.search.init,
    helperList: state.search.helperList,
    list: state.search.list
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getSearchInit() {
      dispatch(hotandhistoryAction())
    },
    helper(keyword: string) {
      dispatch(helperAction(keyword))
    },
    getList(keyword: string, sort: string = "id", order: string = "asc") {
      dispatch(listAction(keyword, sort, order))
    },
    // 删除历史记录
    removeHistory() {
      dispatch(removeAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
