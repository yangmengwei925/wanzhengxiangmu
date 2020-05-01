import React, { useState } from 'react';
import styles from './headerBar.module.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface propsType {
  title: string
}

let HeaderBar: React.FC<propsType & RouteComponentProps> = (props) => {

  return (
    <div className={styles.header}>
      <div className={styles.left} onClick={() => {
        props.history.go(-1)
      }}>
        <i className="iconfont icon-zuojiantou"></i>
      </div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.right}></div>
    </div>
  )
}

export default withRouter(HeaderBar);
