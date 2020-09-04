import profileReducer, {addPostActionCreator, deletePost} from './profileReducer';
let state = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'He', likesCount: 102},
        {id: 3, message: 'Hello', likesCount: 121},
        {id: 4, message: 'Good', likesCount: 14}
    ]
};
test('length of posts should be incremented', () => {
    let action = addPostActionCreator('test profile reducer');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5);
});
test('message of new post should be correct', () => {
    let action = addPostActionCreator('test profile reducer');
    let newState = profileReducer(state, action);
    expect(newState.posts[4].message).toBe('test profile reducer');
});
test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});
test("after deleting length shouldn't be decrement if id is incorrect", () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});
