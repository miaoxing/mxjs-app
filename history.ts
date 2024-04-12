import {createBrowserHistory, createHashHistory} from 'history';

const history = 'hash' === window.miaoxing?.routerMode ? createHashHistory() : createBrowserHistory();

// @ts-ignore add reload function
history.reload = function () {
  if (!this.location.state) {
    this.location.state = {};
  }
  this.location.state.__reload = new Date();
  this.replace(this.location);
};

export default history;
