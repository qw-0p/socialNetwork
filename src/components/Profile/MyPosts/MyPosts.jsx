import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    {' '}
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                </div>

                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="Hi" />
                <Post message="Hello" />
            </div>
        </div>
    );
};
export default MyPosts;
