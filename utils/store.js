/**
 * create redux store
 * 使用前请先安装包: npm install -S redux redux-thunk
 */
import createStore from 'redux/lib/createStore';
import applyMiddleware from 'redux/lib/applyMiddleware';
import thunk from 'redux-thunk';

// thunk 使用频率太高，默认集成
export let defaultMiddlewares = [applyMiddleware(thunk)];

if (process.env.NODE_ENV === 'development') {
	defaultMiddlewares = defaultMiddlewares.concat([
	  window.devToolsExtension ? window.devToolsExtension() : f => f
	]);
}

/**
 * 创建带中间件的 store
 * @param  {Array}  middlewares [description]
 * @return {[type]}             [description]
 *
 */
export default function createStoreWithMiddleware(middlewares = []) {
  return (...args) => {
    return compose(
      ...middlewares,
      ...defaultMiddlewares,
    )(createStore)(...args);
  };
}

/** 
example: 

import createStoreWithMiddleware from 'utils/store';
import rootReducer from './rootReducer';
const store = createStoreWithMiddleware()(rootReducer)
 */