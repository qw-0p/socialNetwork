import {rerenderEntireTree} from '../render';

let state = {
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
};
window.state = state;
export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state); //Перерисовка дерева
};

export default state;
