import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Auth({children}) {
    console.log(children,1234)
    const token = useSelector((state)=>state.user.token)
    const navigation = useNavigate()
    console.log(token)

    useEffect(()=>{
      if(!token){
        navigation('/email')
      }
    },[])

  return children
}
