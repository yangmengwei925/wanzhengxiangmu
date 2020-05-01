import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { routerConfigType } from '../utils/interface'
import { getToken } from '../utils/index'
import { connect } from 'react-redux';
import { GetUserInfoAction } from '../store/actions/user';

interface dispatchType {
  getUserInfo: Function
}
interface propsType {
  user: []
}
const routerView: React.FC<routerConfigType & dispatchType & propsType> = (props) => {
  let arr = props.routers;
  let routerArr = arr.filter((item) => !item.to);
  let redirectArr = arr.filter(item => item.to).map(item => { return <Redirect path={item.path} to={`${item.to}`} key={item.path}></Redirect> });
  return (
    <Switch>
      {
        routerArr.map((item) => {
          return (
            <Route path={item.path} render={(prop) => {
              let { match: { path } } = prop;
              if (path !== '/login' && path !== '/home' && !getToken() && (path == "/home/my" || path == "/home/cart")) {
                return <Redirect to={`/login?redirect=${encodeURIComponent(path)}`} />
              }
              if (getToken() && Object.keys(props.user).length == 0) {
                props.getUserInfo()
              }
              return <item.component routers={item.children} {...prop} key={item.path} ></item.component>
            }} key={item.path}></Route>
          )
        }).concat(redirectArr)
      }
    </Switch>
  )
}
const mapStateToProps = (state: any) => {
  return {
    user: state.user.userList
  }
}
const mapDispatchToProps = (dispatch: Function) => {
  return {
    getUserInfo: () => {
      dispatch(GetUserInfoAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(routerView)
