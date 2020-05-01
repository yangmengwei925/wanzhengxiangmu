import React from 'react'
import { HashRouter } from 'react-router-dom'
import RouterView from './routerView'
import routerConfig from './routerConfig'


const router: React.FC = () => {
  return (
    <HashRouter>
      <RouterView routers={routerConfig.routers}></RouterView>
    </HashRouter>
  )
}

export default router
