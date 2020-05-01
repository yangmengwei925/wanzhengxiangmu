import request from '@/utils/request'

export default {
    getLookdata:(params)=>request.get('/baby/bb.php',params),
    getSongText:()=>request.get('/getSongcontext')
}