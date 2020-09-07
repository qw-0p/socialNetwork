import React, {Component} from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';

import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import {connect} from 'react-redux';
import {initializeApp} from './redux/appReducer';
import {compose} from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/redux-store';
import {Provider} from 'react-redux';
import {Suspense} from 'react';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />;
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route
                        path='/dialogs'
                        render={() => {
                            return (
                                <Suspense fallback={<Preloader />}>
                                    <DialogsContainer />
                                </Suspense>
                            );
                        }}
                    />

                    <Route
                        path='/profile/:userId?'
                        render={() => {
                            return (
                                <Suspense fallback={<Preloader />}>
                                    <ProfileContainer />
                                </Suspense>
                            );
                        }}
                    />

                    <Route path='/users' render={() => <UsersContainer />} />

                    <Route path='/login' render={() => <LoginPage />} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export let AppContainer = compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);

const SocialApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    );
};
export default SocialApp;
