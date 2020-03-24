import React, { Component } from 'react';

class userItem extends Component {
  state = {
    id: 'id',
    login: 'maryjay1',
    avatar_url:
      'https://avatars3.githubusercontent.com/u/26500178?s=460&u=d6c8a592a6244e407bdf2420f0bc8744ba84f479&v=4',
    html_url: 'https://github.com/maryjay1'
  };

  render() {
    const { login, avatar_url, html_url } = this.state;
    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>

        <div>
          <a href={html_url} className='btn btn-dark btm-sm my-1'>
            More
          </a>
        </div>
      </div>
    );
  }
}

export default userItem;
