import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';
import {
    updateNewPostTextActionCreator,
    addPostActionCreator,
} from '../../../redux/state';

const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => (
        <Post message={p.message} likesCount={p.likesCount} />
    ));
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    {' '}
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="5"
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
                </div>

                <button
                    onClick={() => {
                        addPost();
                    }}
                >
                    Add post
                </button>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
};
export default MyPosts;
