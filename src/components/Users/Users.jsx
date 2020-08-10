import React from 'react';
import s from './Users.module.scss';

const Users = (props) => {
    props.setUsers([
        {
            id: 1,
            photoUrl:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/User_with_smile.svg/1200px-User_with_smile.svg.png',
            followed: false,
            fullName: 'Aleksandr',
            status: 'Hi',
            location: {city: 'Kyiv', country: 'Ukraine'},
        },
        {
            id: 2,
            photoUrl:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/User_with_smile.svg/1200px-User_with_smile.svg.png',
            followed: true,
            fullName: 'Sergio',
            status: 'Hi guys',
            location: {city: 'Minsk', country: 'Belarus'},
        },
        {
            id: 3,
            photoUrl:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/User_with_smile.svg/1200px-User_with_smile.svg.png',
            followed: false,
            fullName: 'Viktor',
            status: 'Hello',
            location: {city: 'Moskow', country: 'Russia'},
        },
    ]);
    return (
        <div>
            {props.users.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.userPhoto} />
                        </div>
                        <div>
                            {u.followed ? (
                                <button
                                    onClick={() => {
                                        props.unfollow(u.id);
                                    }}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        props.follow(u.id);
                                    }}
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};
export default Users;
