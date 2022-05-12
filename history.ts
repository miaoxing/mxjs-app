import {createBrowserHistory, createHashHistory} from 'history';

const history = 'browser' === globalThis.miaoxing?.routerMode ? createBrowserHistory() : createHashHistory();

// @ts-ignore add reload function
history.reload = function () {
  if (!this.location.state) {
    this.location.state = {};
  }
  this.location.state.__reload = new Date();
  this.replace(this.location);
};

export default history;
