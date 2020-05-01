import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { homeAction } from '../../store/actions/home'
import { RouteComponentProps } from 'react-router'
import styles from './Index.module.scss';
import { NavLink } from 'react-router-dom'

import Bannerbar from '../../components/banner';
interface DispatchType {
  getHomeList: Function,
  list: StateType
}

interface StateType {
  banner: Array<{
    [name: string]: string | number
  }>,
  channel: Array<{
    [name: string]: string | number
  }>,
  newGoodsList: Array<{
    [name: string]: string | number
  }>,
  hotGoodsList: Array<{
    [name: string]: string | number
  }>,
  brandList: Array<{
    [name: string]: string | number
  }>,
  topicList: Array<{
    [name: string]: string | number
  }>,
  categoryList: Array<{
    [name: string]: string | number
  }>
}

let Index: React.FC<DispatchType & StateType & RouteComponentProps> = (props) => {
  useEffect(() => {
    props.getHomeList();
  }, []);
  return (
    <div className={styles.index}>

      {
        props.list.banner && <Bannerbar bannerList={props.list.banner}></Bannerbar>
      }
      <div className={styles.channelWrap}>
        {
          props.list.channel && props.list.channel.map((item, index) => {
            return <dl className={styles.channelitem} key={item.id}>

              <a className={styles.channelitem_dt}><img
                className={styles.channelitem_img}
                src={`${item.icon_url}`} alt="" /></a>
              <dd className={styles.channelitem_dd}>{item.name}</dd>
            </dl>
          })
        }
      </div>
      <div className={styles.brandBox}>
        <div className={styles.brandBox_tit}>
          品牌制造商直供
        </div>
        <div className={styles.brandBox_list}>
          {props.list.brandList && props.list.brandList.map((item, index) => {
            return (
              <a href='#' key={item.id}>
                <div className={styles.brandItemName}>{item.name}</div>
                <div className={styles.brandItemMinPrice}>{item.floor_price}元起</div>
                <img src={`${item.new_pic_url}`} alt="" />
              </a>
            )
          })}
        </div>
      </div>
      <div className={styles.newGroods}>
        <div className={styles.newGroods_tit}>
          新品首发
        </div>
        <div className={styles.newGroods_list}>
          {
            props.list.newGoodsList && props.list.newGoodsList.map((item, index) => {
              return <a key={item.id}>
                <img src={`${item.list_pic_url}`} alt="" />
                <div className={styles.tit}>
                  {item.name}
                </div>
                <div className={styles.price}>
                  ￥{item.retail_price}
                </div>
              </a>
            })
          }
        </div>
      </div>
      <div className={styles.hotGroods}>
        <div className={styles.hotGroods_tit}>
          人气推荐
        </div>
        <div className={styles.hotGroods_list}>
          {
            props.list.hotGoodsList && props.list.hotGoodsList.map((item, index) => {
              return <a key={item.id}>
                <img src={`${item.list_pic_url}`} alt="" />
                <div className={styles.hotGroods_infos}>
                  <div className={styles.hotGroods_name}>
                    {item.name}
                  </div>
                  <div className={styles.hotGroods_info}>
                    {item.goods_brief}
                  </div>
                  <div className={styles.hotGroods_price}>
                    ￥{item.retail_price}
                  </div>
                </div>
              </a>
            })
          }
        </div>
      </div>
      <div className={styles.topGoodsBox}>
        <div className={styles.topGoodsTitle}>专题精选</div>
        <div className={styles.topGoodsWrap}>
        </div>
      </div>
      <div className={styles.cateGoryBox}>
        {
          props.list.channel && props.list.categoryList.map((item: any, index) => {
            return (
              <div key={item.id}>
                <div className={styles.cateGoryName} >{item.name}</div>
                <div className={styles.cateGoryGoodsWrap}>
                  {
                    item.goodsList.map((it: any) => {
                      return (
                        <NavLink to={`/goods/${it.id}`} key={it.id}>
                          <div className={styles.goodsItemImg}>
                            <img src={it.list_pic_url} alt="" />
                          </div>
                          <div className={styles.goodsItemName}>{it.name}</div>
                          <div className={styles.goodsItemPrice}>￥{it.retail_price}</div>
                        </NavLink>
                      )
                    })
                  }
                  <NavLink to={`/Categorys/${item.id}`} className={styles.categoryMoreGoods}>
                    <div>更多{item.name}好物</div>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==" alt="" />
                  </NavLink>

                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  console.log(state)
  return {
    list: state.home
  }
}

const mapDispacthToProps = (dispacth: Function) => {
  return {
    getHomeList() {
      dispacth(homeAction());
    }
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(Index);
