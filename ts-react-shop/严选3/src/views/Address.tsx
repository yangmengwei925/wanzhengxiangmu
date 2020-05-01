import React, { useEffect } from 'react';
import styles from './Address.module.scss';
import { connect } from 'react-redux';
import { getAddressListAction } from '../store/actions/address';
import { removeAddress } from '../api/address';
import { RouteComponentProps } from 'react-router-dom';
import Headers from '../components/headerBar'

interface dispatchType {
  getAddressList: Function
}

interface stateType {
  list: Array<{
    [key: string]: number | string
  }>
}

let Address: React.FC<dispatchType & stateType & RouteComponentProps<{ push: "" }>> = (props) => {

  useEffect(() => {
    props.getAddressList()
  }, [])

  let changeRemove = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) => {
    e.stopPropagation();
    let res = await removeAddress(id);
    console.log(res)
    if (res.data === "删除成功") {
      props.getAddressList()
    }
  }

  let toAddAddress = (item: object) => {
    console.log(props.history.push)
    // props.history.push("/addressAdd")
    props.history.replace({
      pathname: "/addressAdd",
      state: item
    })

  }

  return (
    <div className={styles.Address}>
      <Headers title="地址管理"></Headers>
      <div className={styles.addressPage}>
        <div className={styles.addressList} style={{ background: 'url(./img/addressHeader.png) repeat-x' }}>
          {
            props.list.map((item: any) => {
              return (
                <div className={styles.addressItem} key={item.id} onClick={() => { toAddAddress(item) }}>
                  <div className={styles.addressMsg + ` ${item.is_default ? styles.active : ""}`}>
                    <div className={styles.concatName}>{item.name}</div>
                    <div className={styles.addressDetail}>
                      <div className={styles.concatPhone}>{item.mobile}</div>
                      <div className={styles.concatAddress}>{item.full_region}</div>
                      <div className={styles.concatAddress}>{item.address}</div>
                    </div>
                    <div className={styles.deleteAddress} onClick={(e) => { changeRemove(e, item.id) }}>
                      <img src="./img/remove.png" alt="" />
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div onClick={() => { props.history.replace("/addressAdd") }} className={styles.addAddress} >新建地址</div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    list: state.address.data
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getAddressList() {
      dispatch(getAddressListAction())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Address)
