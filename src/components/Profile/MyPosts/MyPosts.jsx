import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'He', likesCount: 10},
        {id: 3, message: 'Hello', likesCount: 121},
        {id: 4, message: 'Good', likesCount: 14},
    ];
    let postsElements = posts.map((p) => (
        <Post message={p.message} likesCount={p.likesCount} />
    ));
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
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
};
export default MyPosts;
