import axios from "axios";
const BaseUrl = `${process.env.REACT_APP_BACKEND_URL}/api`

const postApiOptions = {
    "Content-Type":"application/json",
    "Origin":'https://ssvamsee.github.io/',
    "withCredentials" : true
}

export async function emailVerify(body){
    return await axios.post(`${BaseUrl}/email`,body,postApiOptions)
}

export async function CheckPassword(body){
    return await axios.post(`${BaseUrl}/password`,body,postApiOptions)
}