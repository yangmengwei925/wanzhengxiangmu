import React, { useState } from 'react'
import { Toast } from 'antd-mobile'
import { mobileReg, passwordReg } from '../utils/regexp'
import { connect } from 'react-redux'
import { loginAction } from '../store/actions/login'
import { RouteComponentProps, } from 'react-router'
import styles from './Login.module.scss'
import { NavLink } from 'react-router-dom'

interface StateType {
  isLogin: boolean
}
interface DispatchType {
  login: (mobile: string, password: string) => void
}

let LoginPage: React.FC<StateType & DispatchType & RouteComponentProps> = props => {

  let [mobile, setMobile] = useState<string>('15323807318')
  let [password, setPassword] = useState<string>('123456')
  console.log(props, "props----------")
  // 如果用户已经登陆，回到上一个页面
  if (props.isLogin) {
    console.log(props.isLogin, "isLogin------")
    let redirect = props.location.search.slice(1).split('=')[1]
    // console.log(props,"props-----------")
    console.log(decodeURIComponent(redirect), "--------------")
    props.history.replace(redirect ? decodeURIComponent(redirect) : '/')
    return null;
  }

  let changeMobile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobile(e.target.value);
  }

  let changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  let login = () => {
    if (!mobileReg.test(mobile!)) {
      Toast.info('请输入正确的手机号码');
      return;
    }
    if (!passwordReg.test(password!)) {
      Toast.info('请输入正确的密码');
      return;
    }
    props.login(mobile, password);
  }

  return <div className={styles.Login}>
    <div className={styles.logo}>
      <img src="./img/logo.f51ce87b.jpg" alt="" />
    </div>

    <div className={styles.loginMain}>
      <div className={styles.inputWarp}>
        <input type="text" value={mobile} placeholder="请输入你的手机号码" onChange={changeMobile} />
      </div>
      <div className={styles.inputWarp}>
        <input type="password" value={password} placeholder="请输入你的密码" onChange={changePassword} />
      </div>

      <div className={styles.loginBtn}>
        <div>
          <button onClick={login}>登  陆</button>
        </div>
      </div>
    </div>
  </div>;
}

const mapStateToProps = (state: any) => {
  return {
    isLogin: state.login.isLogin
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    login: (mobile: string, password: string) => {
      dispatch(loginAction(mobile, password))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
