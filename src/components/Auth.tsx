import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

export const Auth = ({ authType }: { authType: string }) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate()

    const handleAuth = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()
        axios.post(`http://localhost:5000/auth/${authType}`, { login, password, email }).then((response) => {
            console.log(response.data)
            switch (authType) {
                case 'register': {
                    localStorage.setItem('token', JSON.stringify(response.data.token))
                    navigate('/gallery')
                    break;
                }
                case 'login': {
                    localStorage.setItem('token', JSON.stringify(response.data.token))
                    navigate('/gallery')
                    break;
                }
                default: {
                    break;
                }
            }
        }
        ).catch((error) => console.log(error))
        console.log(login)
        setEmail('')
        setPassword('')
        setLogin('')
    }
    useEffect(() => {

    }, [email, password, login])
    return <form onSubmit={handleAuth}>
        <span>Login:</span>
        <input type="text"
            value={login}
            onChange={e => setLogin(e.target.value)}
        />
        <span>Email:</span>
        <input type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
        <span>Password:</span>
        <input type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">{authType}</button>
    </form>
}