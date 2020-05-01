import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';


import home from './reducers/home';
import login from './reducers/login';
import subject from './reducers/subject';
import classify from './reducers/classify';
import subjectDetail from './reducers/subjectDefault';
import collect from './reducers/collect';
import address from './reducers/address';
import search from './reducers/search';
import user from './reducers/user';
import cart from './reducers/cart';
import goods from './reducers/goodsDetial';
import addCollect from './reducers/addCollect'

//连接reducer
let reducers = combineReducers({
  home,
  login,
  subject,
  classify,
  subjectDetail,
  collect,
  address,
  search,
  user,
  cart,
  goods,
  addCollect
})

let store = createStore(reducers, applyMiddleware(ReduxThunk, ReduxLogger))
export default store;
