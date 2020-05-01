import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { subjectAction } from '../../store/actions/subject';
import styles from './Subject.module.scss';
import {NavLink} from 'react-router-dom'
// import BetterScroll from 'better-scroll';



interface propsType {
  getSubjectList: Function,
  list: stateType[],
  bs: Function
}

interface stateType {
  id: number,
  title: string,
  price_info: number,
  scene_pic_url: string,
  subtitle: string
}

let Subject: React.FC<propsType> = (props) => {

  let [size] = useState(10)
  let [page, setPage] = useState(1)
  const subjectRef = useRef(null)


  useEffect(() => {
    // window.scrollY = 0;
    props.getSubjectList(size, page);
    setPage(page += 1);
  }, [])

  useEffect(() => {
    let globalScroll = () => {
      // console.log(window.innerHeight + window.scrollY)
      // console.log(subjectRef.current)
      // console.log(document.body.clientHeight)
      if (window.innerHeight + window.scrollY + 1 > document.body.clientHeight) {
        props.getSubjectList(size, page);
        setPage(page += 1);
      }
      // console.log(window.scrollY)
    }
    if (props.list) {
      window.addEventListener('scroll', globalScroll)
      // let bs = new BetterScroll('#subject', {
      //   pullUpLoad: {
      //     threshold: 50
      //   }
      // });
      // bs.on('pullingUp', () => {
      //   props.getSubjectList(size, page);
      //   setPage(page+=1);
      //   bs.finishPullUp();
      //   bs.refresh();
      // })
    }
    return () => {
      window.removeEventListener('scroll', globalScroll)
    }
  }, [])

  return (
    <div className={styles.Subject} ref={subjectRef}>
      <div className={styles.tabPageContent}>
        {
          props.list && props.list.map((item, index) => {
            return (
              <NavLink to={`/subjectDetail/${item.id}`} className={styles.topicItem} key={index} >
                <img src={item.scene_pic_url} alt="" />
                <div className={styles.topicItemTitle}>{item.title}</div>
                <div className={styles.topicItemSubtitle}>{item.subtitle}</div>
                <div className={styles.topicItemPrice}>{item.price_info}元起</div>
              </NavLink>
            )
          })
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    list: state.subject.data
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getSubjectList(size: number, page: number) {
      dispatch(subjectAction(size, page))
    },
    bs() {
      console.log(1)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Subject);