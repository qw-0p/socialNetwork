import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let posts = [
    {id: 1, message: 'Hi', likesCount: 12},
    {id: 2, message: 'He', likesCount: 102},
    {id: 3, message: 'Hello', likesCount: 121},
    {id: 4, message: 'Good', likesCount: 14},
];
let dialogs = [
    {id: 1, name: 'Aleksandr'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Pavel'},
    {id: 4, name: 'Vitya'},
    {id: 5, name: 'Yarikk'},
];
let messages = [
    {id: 1, message: 'HI'},
    {id: 2, message: 'HA'},
    {id: 3, message: 'HI'},
    {id: 5, message: 'Ho'},
    {id: 4, message: 'HI'},
];

ReactDOM.render(
    <App messages={messages} dialogs={dialogs} posts={posts} />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
