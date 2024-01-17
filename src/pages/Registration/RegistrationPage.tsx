import { Auth } from "../../components/Auth/Auth"
import axios from "axios"
export const RegistrationPage = () => {


    return <div className="input_page_container">
        <h2>RegistrationPage</h2>
        <Auth authType="register" />
    </div>
}