import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';
import {required, maxLengthCreator} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo((props) => {
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
});

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={Textarea} validate={[required, maxLength10]} />
            </div>
            <button>Add post</button>
        </form>
    );
};
AddNewPostForm = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;
