
import { useAuthContext } from '../../context/authContext';

import { useNavigate } from 'react-router-dom';
import * as authServices from '../../services/authServices';

function Login() {
    const { login } = useAuthContext;
    const navigate = useNavigate();

    const loginHandler = (e) =>{
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authServices.login(email, password);

        navigate('/');

    }

    return (
        <section id="login-page" className="auth">
            <form id="login" method="POST" onSubmit={loginHandler}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
};

export default Login;