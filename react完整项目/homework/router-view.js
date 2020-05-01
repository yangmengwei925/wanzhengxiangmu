import React, { Component } from 'react'
import {Switch,Redirect,Route} from "react-router-dom"
export default class routerView extends Component {
    render() {
        let {routers}=this.props
        let newcomponent=routers.filter(item=>item.component)
        let newredirect=routers.filter(item=>item.redirect)
        return (
            <Switch>
                {
                    newcomponent.map((item,index)=>{
                        return <Route path={item.path} key={index} render={props=>{
                            if(item.children){
                                return <item.component {...props} routers={item.children}/>
                            }else{
                                return <item.component {...props}/>
                            }
                        }}/>
                    })
                }
                {
                    newredirect.map((item,index)=>{
                        return <Redirect from={item.path} to={item.redirect} key={index}/>
                    })
                }
            </Switch>
        )
    }
}
