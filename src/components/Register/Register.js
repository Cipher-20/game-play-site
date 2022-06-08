import * as authServices from '../../services/authServices';

function Register() {

    const registerHandler = (e) =>{
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authServices.register(email, password);
         
    }

    return (
        <section id="register-page" className="content auth">
            <form id="register" method="POST" onSubmit={registerHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com" />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
};

export default Register;