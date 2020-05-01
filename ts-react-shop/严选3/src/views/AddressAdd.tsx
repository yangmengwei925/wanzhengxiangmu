import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styles from './AddressAdd.module.scss';
import { addAddress } from '../api/address';
import { RouteComponentProps, NavLink } from 'react-router-dom'

// interface dispatchType {
//   getAddressList: Function
// }

// interface stateType {
//   list: Array<{
//     [key: string]: number | string
//   }>
// }

let AddressAdd: React.FC<RouteComponentProps<{ push: string }>> = (props) => {

  let item: any = props.location.state;
  useEffect(() => {
    // console.log(props.location.state)
    if (props.location.state) {
      setName(item.name)
      setAddress(item.address)
      setCity_id(item.city_id)
      setMobile(item.mobile)
      setFlag(item.is_default)
      setProvince_id(item.province_id)
      setDistrict_id(item.district_id)
    }
  }, [])

  let [flag, setFlag] = useState(false)
  let [name, setName] = useState("")
  let [mobile, setMobile] = useState("")
  let [address, setAddress] = useState("")
  let [province_id, setProvince_id] = useState(2)
  let [city_id, setCity_id] = useState(37)
  let [district_id, setDistrict_id] = useState(403)

  let changeName = (e: any) => {
    setName(e.target.value)
  }
  let changeMobile = (e: any) => {
    setMobile(e.target.value)
  }
  let changeAddress = (e: any) => {
    setAddress(e.target.value)
  }

  let changeAdd = async () => {
    // console.log({
    //   name, mobile, province_id, city_id, district_id, address, is_default: flag
    // })
    let res = null;
    if (item) {
      res = await addAddress({
        id: item.id, name, mobile, province_id, city_id, district_id, address, is_default: flag
      })
    } else {
      res = await addAddress({
        name, mobile, province_id, city_id, district_id, address, is_default: flag
      })
    }
    if (res.data) {
      props.history.replace("/address")
    }
  }

  //   name: "一顿饭"
  // mobile: "15266984522"
  // province_id: 2
  // city_id: 37
  // district_id: 403
  // address: "点点滴滴"
  // is_default: false

  return (
    <div className={styles.AddressAdd}>
      <div className={styles.header}>
        <div className={styles.left}></div>
        <div className={styles.title}>{item ? "修改地址" : "新增地址"}</div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.inputBox}>
        <input type="text" className={styles.addressInput} placeholder="姓名" value={name} onChange={changeName} />
      </div>
      <div className={styles.inputBox}>
        <input type="text" className={styles.addressInput} placeholder="电话号码" value={mobile} onChange={changeMobile} />
      </div>
      <div className={styles.inputBox}>
        <input type="text" className={styles.addressInput} placeholder="北京 北京市 东城区" />
      </div>
      <div className={styles.inputBox}>
        <input type="text" className={styles.addressInput} placeholder="详细地址" value={address} onChange={changeAddress} />
      </div>
      <div className={styles.isDefaultAddress} onClick={() => {
        setFlag(!flag)
      }}>
        设置默认地址
        {
          flag ? <img src="./img/yuans.png" alt="" /> : <img src="./img/yuan.png" alt="" />
        }
      </div>

      <div className={styles.closeAddress}>
        <div onClick={()=>{props.history.replace("/address")}}>取消</div>
        <div onClick={changeAdd}>保存</div>
      </div>

    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {

  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddressAdd)
