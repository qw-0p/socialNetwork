import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';

const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost} />
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
};

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component='textarea' />
            </div>
            <button>Add post</button>
        </form>
    );
};
AddNewPostForm = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;
