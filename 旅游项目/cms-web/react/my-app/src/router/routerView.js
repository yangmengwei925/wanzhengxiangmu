import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
export default class routerView extends Component {
    render() {
        const {routes}=this.props
        const redirect=routes.filter(item=>item.redirect)
        const newRoutes=routes.filter(item=>!item.redirect)
        return (
            <Switch>
                {
                    newRoutes.map((item,key)=>(
                        <Route key={key} path={item.path} render={props=>{
                            if(item.children)
                            {
                                return <item.component routes={item.children} {...props}/>
                            }
                            else
                            {
                                return <item.component {...props}/>
                            }
                        }}/>
                    ))
                }
                {
                    redirect.map((item,i)=>(
                         <Redirect key={i} from={item.path} to={item.redirect}/>
                    ))
                    
                }
            </Switch>
        )
    }
}
