import React from 'react';
import Pagination from '../common/Pagination/Pagination';
import User from './User';

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return (
        <div>
            <Pagination currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />

            {users.map((u) => (
                <User user={u} followingInProgress={props.followingInProgress} follow={props.follow} unfollow={props.unfollow} key={u.id} />
            ))}
        </div>
    );
};

export default Users;
