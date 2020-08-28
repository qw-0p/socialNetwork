import React, {Component} from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import {connect} from 'react-redux';
import {getAuthUserData} from './redux/authReducer';
import {compose} from 'redux';

class App extends Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }
    render() {
        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                    <Route path='/users' render={() => <UsersContainer />} />
                    <Route path='/login' render={() => <LoginPage />} />
                </div>
            </div>
        );
    }
}

export default compose(withRouter, connect(null, {getAuthUserData}))(App);
