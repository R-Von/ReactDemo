import { createStore , applyMiddleware } from 'redux'

import reducer from './reducer'

import thunk from 'redux-thunk'

const store = createStore(
    reducer,
    applyMiddleware(thunk) //引入中间件
    // 可以在中间件里去写异步请求
)

export default store