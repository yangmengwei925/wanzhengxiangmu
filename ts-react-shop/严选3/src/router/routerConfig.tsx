import { routerConfigType } from '../utils/interface'

// 引入一级路由
import Login from '../views/Login'
import BannerDetail from '../views/BannerDetail'
import Categorys from '../views/Categorys'
import Collect from '../views/Collect'
import Goods from '../views/Goods'
import Search from '../views/Search'
import SubjectDetail from '../views/SubjectDetail'
import Address from '../views/Address'
import AddressAdd from '../views/AddressAdd'
import Home from '../views/Home'

// 引入二级路由
import Index from '../views/Home/Index'
import My from '../views/Home/My'
import Classify from '../views/Home/Classify'
import Cart from '../views/Home/Cart'
import Subject from '../views/Home/Subject'


let config = {
  routers: [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "/home/index",
          component: Index
        }, {
          path: "/home/my",
          component: My
        }, {
          path: "/home/classify",
          component: Classify
        }, {
          path: "/home/cart",
          component: Cart
        }, {
          path: "/home/subject",
          component: Subject
        }, {
          path: "/home",
          to: "/home/index"
        }
      ]
    },
    {
      path: "/address",
      component: Address
    },
    {
      path: "/addressAdd",
      component: AddressAdd
    },
    {
      path: "/bannerDetail/:id",
      component: BannerDetail
    },
    {
      path: "/categorys/:id",
      component: Categorys
    },
    {
      path: "/collect",
      component: Collect
    },
    {
      path: "/goods/:id",
      component: Goods
    },
    {
      path: "/search",
      component: Search
    },
    {
      path: "/subjectDetail/:id",
      component: SubjectDetail
    },
    {
      path: "/",
      to: "/home"
    }
  ]
}

export default config as routerConfigType
