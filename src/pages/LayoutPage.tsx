import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import './styles.css'
import { useState } from "react"
export const LayoutPage = () => {
    const [isAuth, setIsAuth] = useState(false)
    return <>
        <div className="header">
            <Header />
        </div>
        <div className="main">
            <Outlet />
        </div>
        <div className="footer">
            <footer>Footer</footer>
        </div>


    </>
}