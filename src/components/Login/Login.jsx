import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type='text' placeholder={'Login'} component={Input} name={'login'} validate={[required]} />
            </div>
            <div>
                <Field type='password' placeholder={'Password'} component={Input} name={'password'} validate={[required]} />
            </div>
            <div>
                <Field type={'checkbox'} component={Input} name={'rememberMe'} /> remember me
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
    const onSubmit = (formData) => {};

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};
export default Login;
