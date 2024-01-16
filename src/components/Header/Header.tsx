import { Link } from "react-router-dom"
import styles from './Header.module.css'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
export const Header = () => {
    const [isAuth, setIsAuth] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        setIsAuth(Boolean(localStorage.getItem('token')))
    }, [isAuth])
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login')
    }
    return <header className={styles.header}>
        <div className={styles.navigation}>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/gallery'}>Gallery</Link>
            <Link to={'/contacts'}>Contacts</Link>
        </div>
        <div className={styles.auth}>
            {localStorage.getItem('token') ? (<button onClick={handleLogout}>Logout</button>) : (<Link to={`/login`}>Login</Link>)}
        </div>

    </header>
}