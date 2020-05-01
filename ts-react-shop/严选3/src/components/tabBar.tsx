import React, { useState } from 'react';
import styles from './tabBar.module.scss'

interface propsType {
  list: Array<{
    [name: string]: string | number
  }>,
  changeIndex: (index: number) => void
}

let TabBar: React.FC<propsType> = (props) => {

  let [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className={styles.tab}>
      {
        props.list.map((item, index: number) => {
          return (
            <div key={item.id}
              className={activeIndex === index ? styles.active : ""}
              onClick={() => { props.changeIndex(index); setActiveIndex(index); }}
            >{item.name}</div>
          )
        })
      }
    </div>
  )
}

export default TabBar;
