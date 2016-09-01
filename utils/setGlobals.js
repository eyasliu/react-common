/**
 * 设置全局变量
 * @param  {object} objs，foucs 需要设置为全局变量的对象集合，objs安全设置(不覆盖已有)，foucs强制设置(覆盖已有)
 */
export default (objs, foucs) => {
  for(let key in objs){
    if(!window.hasOwnProperty(key)){
      window[key] = objs[key];
    }else{
      console.error("global variable ["+key+"] is already exits!")
    }
  }
  for(let key in foucs){
    window[key] = foucs[key]
  }
}


/*
example：

import setGlobal from 'utils/setGlobals'

setGlobal({
  React: React
  ...
}, {
  $: jQuery
  ...
})

 */