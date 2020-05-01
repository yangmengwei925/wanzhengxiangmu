import React from 'react';
import { connect } from 'react-redux';
import styles from './My.module.scss';
import { uploadAvatarAction, UpdateAvatar } from '../../store/actions/user'
import { Toast } from 'antd-mobile'
import { NavLink } from 'react-router-dom'

interface PropsType {
  userInfo: { avatar: string, username: string, mobile: string },
  changeAvatar: Function,
  path: string,
  updateA: Function
}
let My: React.FC<PropsType> = (props) => {
  return (
    <div className={styles.my}>
      <div className={styles.myWrap}>
        <div className={styles.myWrapImg}>
          <img src={`${props.path ? props.path : props.userInfo && props.userInfo.avatar}`} alt="" />

          <input type="file" className={styles.up} onChange={(e) => {
            let file = e.target.files ? e.target.files[0] : null;
            if (file) {
              let form = new FormData();
              form.append(file.name, file);
              props.changeAvatar(form);
            }
          }} />
        </div>

        <div className={styles.myWrapInfo}>
          <p>{props.userInfo && props.userInfo.mobile}</p>
          <p>{props.userInfo && props.userInfo.username}</p>
          <p className={styles.button}>
            <button
              onClick={() => {
                if (props.path) {
                  props.updateA(props.path)
                } else {
                  Toast.info('请先上传你的头像')
                }
              }
              }>确定修改图片</button>
          </p>
        </div>
      </div>

      <div className={styles.conWarp}>
        <div className={styles.active}>
          <NavLink to="/collect">
            <i className='iconfont icon-wodeshoucang'></i>
            <div>我的收藏</div>
          </NavLink>
        </div>

        <div className={styles.active}>
          <NavLink to="/address">
            <i className='iconfont icon-dizhi'></i>
            <div>地址管理</div>
          </NavLink>
        </div>

        <div onClick={() => { Toast.offline('我的订单功能还未解锁，请耐心等待~') }}>
          <i className='iconfont icon-order'></i>
          <div>我的订单</div>
        </div>

        <div onClick={() => { Toast.offline('周末拼单功能还未解锁，请耐心等待~') }}>
          <i className='iconfont icon-pindandingdan'></i>
          <div>周末拼单</div>
        </div>

        <div onClick={() => { Toast.offline('优惠券功能还未解锁，请耐心等待~') }}>
          <i className='iconfont icon-hz_youhuiquan-'></i>
          <div>优惠券</div>
        </div>

        <div onClick={() => { Toast.offline('优选购功能还未解锁，请耐心等待~') }}>
          <i className='iconfont icon-you'></i>
          <div>优选购</div>
        </div>

        <div onClick={() => { Toast.offline('我的红包功能还未解锁，请耐心等待~') }}>
          <i className='iconfont icon-hongbao'></i>
          <div>我的红包</div>
        </div>

        <div onClick={() => { Toast.offline('会员plus功能还未解锁，请耐心等待~') }}>
          <i className='iconfont icon-cardV'></i>
          <div>会员plus</div>
        </div>

        <div onClick={() => { Toast.offline("邀请返利邀请返利还未开发") }}>
          <i className='iconfont icon-yao'></i>
          <div>邀请返利</div>
        </div>

        <div onClick={() => { Toast.offline('意见反馈功能还未解锁，请耐心等待~') }}>
          <i className='iconfont icon-yijian'></i>
          <div>意见反馈</div>
        </div>

        <div onClick={() => { Toast.offline('客服咨询功能还未解锁，请耐心等待~') }}>
          <i className='iconfont icon-kefu'></i>
          <div>客服咨询</div>
        </div>

        <div onClick={() => { Toast.offline('账户安全功能还未解锁，请耐心等待~') }}>
          <i className='iconfont icon-zhanghuanquan'></i>
          <div>账户安全</div>
        </div>
        <div className={styles.btn}>
          <p>退出登录 </p>
        </div>

      </div>
    </div>
  );
}

const mapSateToProps = (state: any) => {
  return {
    userInfo: state.user.userList,
    path: state.user.upLoad
  }
}
const mapDispatchToProps = (dispatch: Function) => {
  return {
    changeAvatar(form: any) {
      dispatch(uploadAvatarAction(form))
    },
    updateA(avatar: string) {
      dispatch(UpdateAvatar(avatar))
    }
  }
}
export default connect(mapSateToProps, mapDispatchToProps)(My);