import React, { useEffect, useState } from 'react';
import styles from './Classify.module.scss';
import { connect } from 'react-redux';
import { classifyAction, contentAction } from '../../store/actions/classify'
import TabBar from '../../components/tabBar'
import { RouteComponentProps ,NavLink} from 'react-router-dom'

interface dispatchType {
  getClassifyList: () => void,
  getContentItem: Function
}

interface stateType {
  list: Array<{
    [name: string]: string | number
  }>,
  contentItem: {
    id: number,
    name: string,
    front_name: string,
    wap_banner_url: string,
    subCategoryList: Array<itemType>,
  },
}

interface itemType {
  [name: string]: string | number
}

let Classify: React.FC<dispatchType & stateType & RouteComponentProps<{ push: string }>> = (props) => {

  let [ind, setInd] = useState(0);

  useEffect(() => {
    props.getClassifyList();
  }, [])

  useEffect(() => {
    if (props.list.length > 0) {
      props.getContentItem(props.list[ind].id);
    }
  }, [props.list])

  useEffect(() => {
    if (props.list.length > 0) {
      props.getContentItem(props.list[ind].id);
    }
  }, [ind])

  return (
    <div className={styles.Clissify}>
      {/* 搜索 */}
      <div className={styles.searchWrap} onClick={() => {
        props.history.push("/search")
      }}>
        <div className={styles.searchInput}>
          <span>搜索好物，共239款好物</span>
        </div>
      </div>
      {/* tab切换 */}
      <div className={styles.tabWarp}>
        <TabBar list={props.list} changeIndex={(index: number) => {
          setInd(index);
        }}></TabBar>
      </div>
      {/* content */}
      <div className={styles.categogContet}>
        <div className={styles.categoryWrap}
          style={{ backgroundImage: `url(${props.contentItem.wap_banner_url})` }}>
          {props.contentItem.front_name}
        </div>
        <div className={styles.categoryTitle}>
          <div></div>
          {props.contentItem.name}分类
          <div></div>
        </div>
        <div className={styles.subCategory}>
          {
            props.contentItem.subCategoryList && props.contentItem.subCategoryList.map((item) => {
              return (
                <NavLink className={styles.subCategoryItem} to={`/categorys/${item.id}`} key={item.id}>
                  <img src={`${item.wap_banner_url}`} alt="" />
                  <div>{item.name}</div>
                </NavLink>
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
    list: state.classify.data,
    contentItem: state.classify.contentItem
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getClassifyList() {
      dispatch(classifyAction());
    },
    getContentItem(id: number) {
      dispatch(contentAction(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Classify);