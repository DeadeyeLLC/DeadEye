'use strict';
var users;

users = (function() {

  function users(numUsers) {
    this.url = (`http://api.randomuser.me/?results=${numUsers}`);
    this.users = [];
    this.state ={ isLoading: true}
  }

  users.prototype.fetchUsers = function() {
    return fetch(this.url)
      .then((response) => response.json())
      .then((responseData) => {
        this.setUsers(responseData.results);
      });
  };

  users.prototype.getUsers = function() {
    return this.users;
  };

  users.prototype.setUsers = function(data) {
    this.users = data;
    this.state.isLoading = false;
  };

  return users;

})();

module.exports = new users(25);