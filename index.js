import Wei from './Wei';
import App from './App';
import Event from './Event';
import Req from './Req';
import Router from './Router';
import Url from './Url';
import Plugin from './Plugin';
import history from './history';

const wei = new Wei();
const {req, router, url, app, event, plugin} = wei.addClasses([
  Req,
  Router,
  Url,
  App,
  Event,
  Plugin,
]);

export default app;
export {
  wei,
  app,
  req,
  router,
  url,
  event,
  plugin,
  // @experimental
  history,
};
