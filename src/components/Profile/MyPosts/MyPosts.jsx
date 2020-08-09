import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => (
        <Post message={p.message} likesCount={p.likesCount} key={p.id} />
    ));
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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

                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
};
export default MyPosts;
