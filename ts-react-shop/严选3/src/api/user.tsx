import axios from '../utils/request'

export let getUserInfo = () => axios.get("user/info");

export let uploadAvatar = (form: FormData) => axios.post('http://123.206.55.50:11000/upload', form)

export let updateAvatar = (avatar: string) => axios.post("/user/updateInfo", { avatar });
