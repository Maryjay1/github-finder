import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'maryjay1',
        avatar_url:
          'https://avatars3.githubusercontent.com/u/26500178?s=460&u=d6c8a592a6244e407bdf2420f0bc8744ba84f479&v=4',
        html_url: 'https://github.com/maryjay1'
      },
      {
        id: '2',
        login: 'anabebs',
        avatar_url:
          'https://avatars2.githubusercontent.com/u/33314998?s=460&u=8e9b8163abb9e8c51de9d6bd6d188ba1a779a20a&v=4',
        html_url: 'https://github.com/anabebs'
      },
      {
        id: '3',
        login: 'KennyBigDeal',
        avatar_url:
          'https://avatars2.githubusercontent.com/u/31068917?s=460&v=4',
        html_url: 'http://github.com/kennybigdeal'
      }
    ]
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: ' 1rem'
};
export default Users;
