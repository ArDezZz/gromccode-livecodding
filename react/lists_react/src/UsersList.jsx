import React from 'react';
import Pagination from './Pagination';
import User from './User';

//state
//curPage

class UsersList extends React.Component {
  state = {
    curPage: 1,
  };
  itemsPerPage = 3;

  prevBtnHandler = () => {
    this.setState({
      curPage: this.state.curPage - 1,
    });
  };

  nextBtnHandler = () => {
    this.setState({
      curPage: this.state.curPage + 1,
    });
  };

  render() {
    const users = this.props.users;
    const { curPage } = this.state;
    //
    const startIndex = (curPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const usersToRender = users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          curPage={curPage}
          goPrev={this.prevBtnHandler}
          goNext={this.nextBtnHandler}
          totalItems={users.length}
          itemsPerPage={this.itemsPerPage}
        />
        <ul className="users">
          {usersToRender.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
