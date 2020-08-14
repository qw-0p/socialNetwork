import React from 'react';
import s from './Users.module.scss';
import userPhoto from '../../assets/images/user.png';

const Users = (props) => {
    return (
        <div>
            <div>
                {pages.map((p) => {
                    return (
                        <span
                            className={
                                this.props.currentPage === p && s.selectedPage
                            }
                            onClick={() => {
                                this.onPageChanged(p);
                            }}
                        >
                            {p}
                        </span>
                    );
                })}
            </div>
            {this.props.users.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img
                                src={
                                    u.photos.small != null
                                        ? u.photos.small
                                        : userPhoto
                                }
                                className={s.userPhoto}
                                alt=""
                            />
                        </div>
                        <div>
                            {u.followed ? (
                                <button
                                    onClick={() => {
                                        this.props.unfollow(u.id);
                                    }}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        this.props.follow(u.id);
                                    }}
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
