//汇总所有的接口 * 是es6模块
import * as user from './user'
import * as blog from './blog'
export default {
    ...user,
    ...blog
}
