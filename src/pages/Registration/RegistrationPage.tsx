import { Auth } from "../../components/Auth"
import axios from "axios"
export const RegistrationPage = () => {


    return <div className="container">
        <h3>RegistrationPage</h3>
        <Auth authType="register" />
    </div>
}