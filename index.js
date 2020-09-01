import Wei from './Wei';
import App from './App';
import Event from './Event';
import Req from './Req';
import Router from './Router';
import Url from './Url';
import history from './history';

const wei = new Wei();
const {req, router, url, app, event} = wei.addClasses([
  Req,
  Router,
  Url,
  App,
  Event,
]);

export default app;
export {
  wei,
  app,
  req,
  router,
  url,
  event,
  // @experimental
  history,
};
