import React from 'react';
import RouterView from '../router/routerView'
import { NavLink } from 'react-router-dom'



interface propsType {
  routers: []
}

const Home: React.FC<propsType> = (props) => {

  return (
    <div className="Home">
      <div className="main">
        <RouterView routers={props.routers}></RouterView>
      </div>
      <footer>

        <NavLink to="/home/index">
          <span className="iconfont icon-shouye"></span>
          首页
        </NavLink>
        <NavLink to="/home/subject">
          <span className="iconfont icon-zhuanti"></span>
          专题
        </NavLink>
        <NavLink to="/home/classify">
          <span className="iconfont icon-leimupinleifenleileibie"></span>
          分类
        </NavLink>
        <NavLink to="/home/cart">
          <span className="iconfont icon-gou_wu_che2"></span>
          购物车
        </NavLink>
        <NavLink to="/home/my">
          <span className="iconfont icon-wode"></span>
          我的
        </NavLink>
      </footer>
    </div>
  );
}

export default Home;

