import myalert from '@/components/alert';
import Vue from 'vue';
const $alert = function(tip,time=3){
    const Com = Vue.extend(myalert) //得到组件原型
    const Instance = new Com({ 
        propsData:{
            tip,
            time
        }
    });
    Instance.$mount();
    document.body.append(Instance.$el);
}
const Alert = {
    install(Vue){
        Vue.prototype.$alert = $alert;
    }
}

export {$alert as Alert};
export default Alert;