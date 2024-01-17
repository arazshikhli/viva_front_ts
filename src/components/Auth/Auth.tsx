import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, useNavigation } from 'react-router-dom'
import styles from './styles.module.css'
import { SubmitHandler, useForm } from 'react-hook-form'
interface MyForm {
    login: string;
    email: string;
    password: string
}
export const Auth = ({ authType }: { authType: string }) => {

    const { register, handleSubmit } = useForm<MyForm>({
        defaultValues: {
            email: 'test@mail.com',
            login: 'test_user',
            password: 'qwerty123'
        }
    })
    const submit: SubmitHandler<MyForm> = data => {
        console.log(data)
    }
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate()
    const location = useLocation()
    const fromPage = location.state?.from?.pathname || '/'
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
                    navigate('/admin')
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
    return <form onSubmit={handleAuth}
        className={styles.form}
    >
        <div className={styles.inputContainer}>
            <span>Login:</span>
            <input type="text"
                // {...register('login')}
                value={login}
                onChange={e => setLogin(e.target.value)}
                className={styles.childInput}
            />
            {email.length === 0 && <span>Enter valid email</span>}
        </div>
        <div className={styles.inputContainer}>
            <span>Email:</span>
            <input type="text"
                // {...register('email')}
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={styles.childInput}
            />
        </div>

        <div className={styles.inputContainer}>
            <span>Password:</span>
            <input type="password"
                // {...register('password')}
                value={password}
                onChange={e => setPassword(e.target.value)}
                className={styles.childInput}
            />
        </div>
        <button
            className={styles.submitBtn}
            type="submit">{authType}</button>
    </form>
}