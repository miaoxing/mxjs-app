import {createBrowserHistory, createHashHistory} from 'history';

const history = 'browser' === miaoxing?.routerMode ? createBrowserHistory() : createHashHistory();

history.reload = function () {
  if (!this.location.state) {
    this.location.state = {};
  }
  this.location.state.__reload = new Date();
  this.replace(this.location);
};

export default history;
