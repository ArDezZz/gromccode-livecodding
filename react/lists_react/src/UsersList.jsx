import React, { Component } from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';

// state
// currentPage

class UsersList extends Component {
  state = {
    currentPage: 1,
  };

  itemsPerPage = 3;

  prevBtnHandler = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  nextBtnHandler = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    const users = this.props.users;

    const startIndex = (this.state.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const usersToRender = users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          currentPage={this.state.currentPage}
          goPrev={this.prevBtnHandler}
          goNext={this.nextBtnHandler}
          totalItems={users.length}
          itemsPerPage={this.itemsPerPage}
        />

        <ul className="users">
          <ul className="users">
            {usersToRender.map(user => (
              <User name={user.name} age={user.age} key={user.id} />
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}

export default UsersList;
