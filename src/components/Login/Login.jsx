import React from 'react';
import {reduxForm} from 'redux-form';

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

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm />
        </div>
    );
};
export default Login;
