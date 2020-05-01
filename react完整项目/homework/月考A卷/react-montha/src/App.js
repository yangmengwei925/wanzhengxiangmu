import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import RouterView from './router/routerView'
import routes from './router/router.config'
import {Provider} from 'react-redux'
import store from './store/store'
import '../src/index.css'
export default class App extends Component {
    render() {
        return (
           <Provider store={store}>
                <BrowserRouter>
                    <RouterView routes={routes}/>
                </BrowserRouter>
           </Provider>
        )
    }
}
