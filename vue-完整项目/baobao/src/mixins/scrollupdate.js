import throttle from '@/utils/throttle'
let myMixin={
    methods:{
        scrollLoad(scrollBox,loadFun){
            if(!scrollBox){
                return 
            }
            const clientHeight=scrollBox.offsetHeight;

            scrollBox.addEventListener('scroll',throttle((e)=>{
                let scrollTop=scrollBox.scrollTop;
                let pageHeight=scrollBox.children[0].offsetHeight;
                if(clientHeight+scrollTop>pageHeight-20){
                    loadFun && loadFun(e);
                }
            }))
        }
    }
}
export default myMixin