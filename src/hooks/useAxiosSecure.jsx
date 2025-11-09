import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const instance = axios.create({
    baseURL: 'http://localhost:3000',
})

const useAxiosSecure = () => {
    const {user, logOut} = useAuth()
    const navigate = useNavigate()
    
    useEffect(() => {
        const requestInterceptors =  instance.interceptors.request.use((config) => {
            console.log(config);
            // config.headers.authorization = `Bearer ${user.accessToken}`
            return config
        })

        const responseInterceptors = instance.interceptors.response.use(res => {
            return res
        })


        return () => {
            instance.interceptors.request.eject(requestInterceptors)
            instance.interceptors.response.eject(responseInterceptors)
        }
    }, [user.accessToken, logOut, navigate])

    return instance
};

export default useAxiosSecure;