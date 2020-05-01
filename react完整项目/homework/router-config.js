import Home from "../view/Home"
const routers=[
    {
        path:"/home",
        component:Home
    },
    {
        path:"/",
        redirect:"/home"
    }
]
export default routers