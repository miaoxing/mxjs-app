import {createBrowserHistory} from "history";

const history = createBrowserHistory();

history.reload = function () {
  if (!this.location.state) {
    this.location.state = {};
  }
  this.location.state.__reload = new Date();
  this.replace(this.location);
}

export default history;
