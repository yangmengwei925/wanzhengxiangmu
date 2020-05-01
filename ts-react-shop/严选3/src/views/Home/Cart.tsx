import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styles from './Cart.module.scss';
import { cartListAction, checkedAction, editCheckedAction, removeAction, addandremoveAction } from '../../store/actions/cart'

interface stateType {
  list: {
    cartList: Array<{
      [key: string]: number | string
    }>,
    cartTotal: {
      checkedGoodsAmount: number,
      checkedGoodsCount: number
    }
  }
}

interface dispatchType {
  getCartList: Function,
  changeChecked: Function,
  emitCheckeds: Function,
  removeCart: Function,
  addandremoveList: Function
}

let Cart: React.FC<dispatchType & stateType> = (props) => {

  let [checkeds, setCheckeds] = useState(false)
  let [editCheckeds, setEditCheckeds] = useState(false)
  let [clickAll, setClickAll] = useState(false)
  let [flag, setFlag] = useState(false)

  useEffect(() => {
    props.getCartList()
  }, [])

  useEffect(() => {
    if (props.list.cartList) {
      if (!flag) {
        let bol = props.list.cartList.every((item) => {
          return !!item.checked
        })
        setCheckeds(bol)
      } else {
        let bol = props.list.cartList.every((item) => {
          return !!item.checkeds
        })
        setEditCheckeds(bol)
      }
    }
  }, [props.list])

  useEffect(() => {
    if (!props.list.cartList) return
    if (!clickAll) return
    props.emitCheckeds(props.list, editCheckeds, "all")
  }, [editCheckeds])

  // 单按钮
  let clickChecked = (item: any) => {
    if (!flag) {
      props.changeChecked(item.checked == 1 ? 0 : 1, item.product_id)
    } else {
      setClickAll(false)
      props.emitCheckeds(props.list, item)
    }
  }

  // 总按钮
  let clickAllChecked = () => {
    if (props.list.cartList.length == 0) return
    if (!flag) {
      let arr: any = []
      props.list.cartList.forEach((item) => {
        arr.push(item.product_id)
      })
      props.changeChecked(checkeds == !!1 ? 0 : 1, arr.join(","))
    } else {
      setClickAll(true)
      setEditCheckeds(!editCheckeds)
    }
  }

  // 删除and订单
  let removeandOrder = () => {
    if (flag) {
      let arr: any = []
      props.list.cartList.filter((it) => {
        return it.checkeds
      }).forEach((item) => {
        arr.push(item.product_id)
      })
      props.removeCart(arr.join(","))
    } else {
      console.log("订单功能尚未完成")
    }
  }

  // ++
  let addFn = (item: any) => {
    props.addandremoveList(props.list.cartList, item.goods_id, item.id, item.number += 1, item.product_id)
  }
  // --
  let removeFn = (item: any) => {
    if (item.number == 1) {
      props.removeCart(item.product_id + "")
      return
    }
    props.addandremoveList(props.list.cartList, item.goods_id, item.id, item.number -= 1, item.product_id)
  }
  // goodsId, id, number, productId
  //                    id: 111
  // user_id: 16
  // session_id: "1"
  //                      goods_id: 1011004
  // goods_sn: "1011004"
  //                     product_id: 20
  // goods_name: "色织精梳AB纱格纹空调被"
  // market_price: 199
  // retail_price: 199
  //                       number: 1
  // goods_specifition_name_value: ""
  // goods_specifition_ids: ""
  // checked: 1
  // list_pic_url: "http://yanxuan.nosdn.127.net/0984c9388a2c3fd
  // cartTotal:
  // goodsCount: 1
  // goodsAmount: 199
  // checkedGoodsCount: 1
  // checkedGoodsAmount: 199
  return (
    <div className={styles.Cart}>
      <div id={styles.cart}>
        {/* 头 */}
        <ul className={styles.serviceList}>
          <li>
            <span>★</span>
            30天无忧退货
          </li>
          <li>
            <span>★</span>
            48小时快速退款
          </li>
          <li>
            <span>★</span>
            满88元免邮费
          </li>
        </ul>
        {/* list */}
        <div className={styles.cartGoodsListWrap}>
          {
            props.list.cartList && props.list.cartList.map((item) => {
              return (
                <div className={styles.cartGoodsItem} key={item.id}>
                  <div className={styles.isCheckItem} onClick={() => { clickChecked(item) }}>
                    {
                      !flag ? item.checked === 0 ? <img src="././img/yuan.png" alt="" /> : <img src="././img/yuans.png" alt="" /> : item.checkeds === 0 ? <img src="././img/yuan.png" alt="" /> : <img src="././img/yuans.png" alt="" />
                    }
                  </div>
                  <div className={styles.goodsImg}>
                    <img src={item.list_pic_url + ''} alt="" />
                  </div>
                  {
                    flag && <div className={styles.cartGoodEditWrap}>
                      <div className={styles.cartEditSizeName}>已选择:</div>
                      <div className={styles.cartEditNum}>
                        <div style={{ color: 'red' }}>￥{item.retail_price}</div>
                        <div id={styles.addandremove}>
                          <div className={styles.countOp}>
                            <div onClick={() => { removeFn(item) }}>-</div>
                            <div>{item.number}</div>
                            <div onClick={() => { addFn(item) }}>+</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  {
                    !flag && <div className={styles.cartGoodsMsg}>
                      <div>{item.goods_name}</div>
                      <div></div>
                      <div style={{ color: 'red' }}>￥{item.retail_price}</div>
                    </div>
                  }
                  {
                    !flag && <div className={styles.cartGoodsNum}>x{item.number}</div>
                  }
                </div>
              )
            })
          }
        </div>
        {/* 下单 */}
        <div className={styles.cartGoodsDo}>
          <div className={styles.isCheckItem} onClick={() => { clickAllChecked() }}>
            {!flag ? checkeds ? <img src="././img/yuans.png" alt="" /> : <img src="././img/yuan.png" alt="" /> : editCheckeds ? <img src="././img/yuans.png" alt="" /> : <img src="././img/yuan.png" alt="" />}
          </div>
          <div className={styles.cartMsgAll}>已选({!flag ? props.list.cartTotal && props.list.cartTotal.checkedGoodsCount : props.list.cartList.filter((item) => {
            return item.checkeds
          }).length}) {!flag ? `￥${props.list.cartTotal && props.list.cartTotal.checkedGoodsAmount}` : ""}</div>
          <div className={styles.cartAllDoButton} onClick={() => {
            setFlag(!flag)
            props.emitCheckeds(props.list, false, "all")
          }}>{flag ? "完成" : "编辑"}</div>
          <div className={styles.cartAllDoButton + ` ${styles.pay}`} onClick={removeandOrder}>{flag ? "删除" : "下单"}</div>
        </div>
      </div>
    </div>
  );
}

const mapSateToProps = (state: any) => {
  return {
    list: state.cart.list
  }
}
const mapDispatchToProps = (dispatch: Function) => {
  return {
    getCartList() {
      dispatch(cartListAction())
    },
    changeChecked(isChecked: number, productId: string) {
      dispatch(checkedAction(isChecked, productId))
    },
    emitCheckeds(list: any, item: any, type: any = "checked") {
      dispatch(editCheckedAction(list, item, type))
    },
    removeCart(productIds: string) {
      dispatch(removeAction(productIds))
    },
    addandremoveList(list: any, goodsId: string, id: string, number: number, productId: string) {
      dispatch(addandremoveAction(list, goodsId, id, number, productId))
    }
  }
}
export default connect(mapSateToProps, mapDispatchToProps)(Cart);
