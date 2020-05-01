import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { GoodsDetialAction } from '../store/actions/goodsDetial'
import styles from './Goods.module.scss';
import Banner from '../components/banner';
import { addCollectAction } from '../store/actions/addCollect';
import Headers from '../components/headerBar';

interface DispatchType {
  getGoodsDetial: Function,
  getCollect: Function,
  getAddCart: Function
}

interface PropsType {
  match: { params: { id: number } },
  flag: string
}

interface StateType {
  goodsList: any,
  bannerList: []
}

let Goods: React.FC<DispatchType & PropsType & StateType> = (props) => {
  let id = props.match.params.id;
  let typeId = 0;
  useEffect(() => {
    props.getGoodsDetial(id)
    props.getCollect(typeId, id)
    // props.getAddCart(goodsId,number,productId)
  }, [])

  const collect = () => {
    props.getCollect(typeId, id)
    console.log(props.flag, 'flag')
  }
  return (<>
    {
      props.goodsList && props.goodsList.map((item: {
        info: {
          name: React.ReactNode;
          goods_brief: string, retail_price: string,
          goods_desc: string
        };
        issue: Array<{ answer: string, question: string }>,
        gallery: [],
        attribute: [],

      }, index: number) => {
        if (item.info && item.gallery) {
          return <div className={styles.goods} key={index}>
            <Headers title={`${item.info.name}`}></Headers>
            <div className={styles.bannerBox}>
              {
                item.gallery.length > 0 ? <Banner bannerList={item.gallery}></Banner> : ''
              }

            </div>
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
            <div className={styles.goodsMsgWrap}>
              <div className={styles.goodsNameTitle}>{item.info.name}</div>
              <div className={styles.goodsNameSubTitle}>{item.info.goods_brief}</div>
              <div className={styles.goodsPriceTitle}>￥{item.info.retail_price}</div>
            </div>
            <div className={styles.goodsSize}>
              <div></div>
              <div>x 0</div>
              <div>选择规格&gt;</div>
            </div>
            <div className={styles.topicDetailImg}
              dangerouslySetInnerHTML={{ __html: item.info.goods_desc }}>
            </div>
            <div className={styles.goodsAttribute}>
              <div className={styles.goodsAttributeLine}>--- 商品参数 ---</div>
              <div className={styles.goodsAttributeList}>
                {
                  item.attribute && item.attribute.map((v: { name: string, value: string }, n) => {
                    return <div className={styles.goodsAttributeItem} key={n}>
                      <div className={styles.attributeLabel}>{v.name}</div>
                      <div className={styles.attributeContent}>{v.value}</div>
                    </div>
                  })
                }

              </div>
            </div>
            <div className={styles.goodsAttribute}>
              {/* <div className={styles.goodsAttributeLine}>--- 商品参数 ---</div> */}
              {
                item.issue && item.issue.map((val, i) => {
                  return <div className={styles.proproblemWrap} key={i}>
                    <div className={styles.problemLabel}>
                      <span>√</span>
                      {val.question}
                    </div>
                    <div className={styles.problemContent}>
                      {val.answer}
                    </div>
                  </div>
                })
              }
            </div>
            <div className={styles.goodsPageDo}>
              {/* <div className={`${styles.isLike} ${props.flag == 'add' ? styles.active : ''}`} onClick={() => { collect() }}>★</div> */}
              <div className={`${styles.isLike}`} onClick={() => { collect() }}>☆</div>
              <div className={styles.cartNum}><i className="iconfont icon-gou_wu_che2" id={styles.icon}><span>3</span></i></div>
              <div className={styles.addCart}>加入购物车</div>
              <div className={styles.payGoods}>立即购买</div>
            </div>
          </div>
        }

      })
    }
  </>

  );
}
const mapStateToProps = (state: any) => {
  return {
    goodsList: [state.goods],
    flag: state.addCollect.type
  }
}
const mapDispatchToProps = (dispatch: Function) => {
  return {
    getGoodsDetial: (id: number) => {
      return dispatch(GoodsDetialAction(id))
    },
    getCollect: (typeId: string, valueId: string) => {
      return dispatch(addCollectAction(typeId, valueId))
    },
    // getAddCart:(goodsId:string,number:string,productId:string)=>{
    //   return dispatch(addCartAction(goodsId,number,productId))
    // }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Goods);
