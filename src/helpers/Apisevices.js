import axios from "axios";
const BaseUrl = `${process.env.REACT_APP_BACKEND_URL}/api`

const postApiOptions = {
    "Content-Type":"application/json",
    "withCredentials" : true
}

export async function emailVerify(body){
    // return await axios.post(`${BaseUrl}/email`,body,postApiOptions)
    let response;

    await fetch(`${BaseUrl}/email`,{
        method:'POST',
        mode:'cors',
        headers:postApiOptions,
        body:JSON.stringify(body)
    }).then((res)=>res.json()).then((res)=> response =res)
    return response
}

export async function CheckPassword(body){
    return await axios.post(`${BaseUrl}/password`,body,postApiOptions)
}