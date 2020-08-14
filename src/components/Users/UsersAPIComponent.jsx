import React from 'react';
import * as axios from 'axios';

import Users from './Users';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNmuber) => {
        this.props.setCurrentPage(pageNmuber);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNmuber}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        let pagesCount = Math.ceil(
            this.props.totalUsersCount / this.props.pageSize
        );

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <Users />;
    }
}

export default UsersAPIComponent;
