import { Auth } from "../../components/Auth/Auth"
import axios from "axios"
export const LoginPage = () => {

    const handleLogin = () => {
        axios.post('http:localhost://5000/auth/register')
    }
    return <div className="input_page_container">
        <h3>Login Page</h3>
        <Auth authType="login" />
    </div>
}