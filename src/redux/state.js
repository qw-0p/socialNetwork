const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'He', likesCount: 102},
                {id: 3, message: 'Hello', likesCount: 121},
                {id: 4, message: 'Good', likesCount: 14},
            ],
            newPostText: 'Я из стейта',
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
        },
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state); //Перерисовка дерева
        }
    },
};

export const addPostActionCreator = () => ({
    type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export default store;
window.store = store;
