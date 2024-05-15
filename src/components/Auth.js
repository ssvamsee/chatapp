import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Auth({ children }) {
    const token = useSelector((state) => state.user.token);
    const navigation = useNavigate();

    useEffect(() => {
        if (!token) {
            navigation('/email');
        }
    }, [token, navigation]);

    return children;
}
