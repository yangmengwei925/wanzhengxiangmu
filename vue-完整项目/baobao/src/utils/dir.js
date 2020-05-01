import Vue from 'vue'
Vue.directive('timeupdate',{
    inserted(el,config,vnode){
        // console.log(el)
        // console.log(1)
        const {value,expression} = config;
        el.currentTime = value / 1000;
        // console.log(el.currentTime,'=====',value)
        el.timeupdateFunc = function(e){
            // console.log(vnode)
            // console.log(vnode.context[expression])
            vnode.context[expression] = e.target.currentTime*1000;
        }
        el.addEventListener('timeupdate',el.timeupdateFunc)
    },
    update(el,config){
        const {value} = config;
        el.currentTime = value / 1000;
    },
    unbind(el){
        el.removeEventListener('timeupdate',el.timeupdateFunc);
    }
})
