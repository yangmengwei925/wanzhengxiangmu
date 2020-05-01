import React, { useEffect } from 'react';
import HeaderBar from '../components/headerBar';
import { connect } from 'react-redux';
import { subjectDetailAction, commentAction, subjectAction } from '../store/actions/subjectDetail';
import styles from './SubjectDetail.module.scss'
import { NavLink, RouteComponentProps } from 'react-router-dom'

interface propsType {
  match: {
    params: {
      id: number
    }
  }
}
interface dispatchType {
  getSubjectDetailList: Function
}
interface stateType {
  detailItem: {
    title: string,
    content: string
  },
  commentList: Array<{
    [name: string]: string | number
  }>,
  subjectList: Array<{
    [name: string]: string | number
  }>
}

let SubjectDetail: React.FC<propsType & dispatchType & stateType & RouteComponentProps<{ replace: string }>> = (props) => {
  // console.log(props.match.params.id)
  let { id } = props.match.params;

  useEffect(() => {
    props.getSubjectDetailList(id, 1, 1, 5);
  }, [])

  useEffect(() => {
    props.getSubjectDetailList(id, 1, 1, 5);
  }, [id])

  useEffect(() => {
    if (props.detailItem.title) {
      document.title = props.detailItem.title
    }
  }, [props.detailItem])

  function createMarkup() {
    return { __html: props.detailItem.content };
  }

  return (
    <div className={styles.SubjectDetail}>

      {/* <HeaderBar title={props.detailItem.title}></HeaderBar> */}
      <div className={styles.topicDetailImg} dangerouslySetInnerHTML={createMarkup()}></div>
      {/* 精选留言 */}
      <div className={styles.commentWrap}>
        {/* 头部 */}
        <div className={styles.titleLine}>
          <div className={styles.titleName}>精选留言</div>
          <div className={styles.titleIcon}>
            <i className="iconfont icon-icon_pencil-edit"></i>
          </div>
        </div>
        {/* 内容 */}
        <div className={styles.commentList}>
          {
            props.commentList.map((item) => {
              return (
                <div className={styles.commentItem} key={item.id}>
                  <div className={styles.userInfo}>
                    <div>匿名用户</div>
                    <div>{item.add_time}</div>
                  </div>
                  <div className={styles.userComment}>{item.content}</div>
                  <div className={styles.commentPicList}></div>
                </div>
              )
            })
          }
        </div>
        {/* 无留言 */}
        {
          props.commentList.length < 1 && <div className={styles.noComment}>
            <div className={styles.noCommentIcon}>
              <img src="data:image/png;base64,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" alt="" />
              <div>等你来留言</div>
            </div>
          </div>
        }
        {
          props.commentList.length >= 5 ? <a className={styles.moreComment} href="">查看更多评论</a> : ""
        }
      </div>
      {/* 推荐专题 */}
      <div className={styles.relateTopic}>
        <div className={styles.relateTopicTitle}>推荐专题</div>
        {
          props.subjectList.map((item) => {
            return (
              <div className={styles.relateTopicItem} key={item.id} onClick={() => {
                // console.log(props.history)
                window.scroll(0, 0)
                // console.log(id)
                // props.getSubjectDetailList(id, 1, 1, 5);
                props.history.replace(`/subjectDetail/${item.id}`)
              }}>
                {/* <NavLink to="#"> */}
                <img src={item.scene_pic_url + ""} alt="" />
                <div>{item.title}</div>
                {/* </NavLink> */}
              </div>
            )
          })
        }

      </div>

    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    detailItem: state.subjectDetail.detailItem,
    commentList: state.subjectDetail.commentList,
    subjectList: state.subjectDetail.subjectList
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getSubjectDetailList(id: number, typeId: number, page: number, size: number) {
      dispatch(subjectDetailAction(id));
      dispatch(commentAction({ valueId: id, typeId, page, size }));
      dispatch(subjectAction(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectDetail);
