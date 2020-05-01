import React, { Component } from 'react';
import Home from '../views/home'
import Login from '../views/login'
import Add from '../views/add'
import Detail from '../views/detail'
import Echart from '../views/echarts'
const routes=[
    {
        path:'/login',
        component:Login
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/add',
        component:Add
    },
    {
        path:'/detail',
        component:Detail
    },
    {
        path:'/echarts',
        component:Echart
    },
    {
        path:'/',
        redirect:'/login'
    }
]
export default routes