import Cookies from "js-cookie"
import { useAuth } from "./useAuth"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { TOKEN } from "../app.constants"

export const useCheckToken = () => {
    const {setIsAuth, isAuth} = useAuth()
    const {pathname} = useLocation()

    useEffect(() =>{
      const token = Cookies.get(TOKEN)
      if (!token) setIsAuth(false)
    },[pathname, isAuth])
}
