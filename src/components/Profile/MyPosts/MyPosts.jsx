import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea name="" id="" cols="30" rows="5"></textarea>
                <button>Add post</button>
            </div>
            <div className="posts">
                <Post message="Hi" />
                <Post message="Hello" />
            </div>
        </div>
    );
};
export default MyPosts;
