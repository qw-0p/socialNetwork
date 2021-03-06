import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'He', likesCount: 102},
        {id: 3, message: 'Hello', likesCount: 121},
        {id: 4, message: 'Good', likesCount: 14},
      ],
      newPostText: '',
    },
    dialogsPage: {
      messages: [
        {id: 1, message: 'HI'},
        {id: 2, message: 'HA'},
        {id: 3, message: 'HI'},
        {id: 5, message: 'Ho'},
        {id: 4, message: 'HI'},
      ],
      dialogs: [
        {id: 1, name: 'Aleksandr'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Pavel'},
        {id: 4, name: 'Vitya'},
        {id: 5, name: 'Yarikk'},
      ],
      newMessageBody: '',
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //наблюдатель
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
