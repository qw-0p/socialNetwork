import React from 'react';

const LoginForm = (props) => {
    return (
        <form>
            <div>
                <input type='text' placeholder={'Login'} />
            </div>
            <div>
                <input type='password' placeholder={'Password'} />
            </div>
            <div>
                <input type={'checkbox'} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};
const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
        </div>
    );
};
export default Login;
