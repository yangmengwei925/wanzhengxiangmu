import React, { Component } from 'react';
import Home from "../views/home"
import Login from '../views/login'
const routers=[
    {
        path:"/home",
        component:Home
    },{
        path:'/login',
        component:Login
    },
    {
        path:"/",
        redirect:"/home"
    }
]
export default routers