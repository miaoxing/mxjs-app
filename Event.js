import hoook from 'hoook';
import ucfirst from 'ucfirst';
import Base from './Base';

const DEFAULT_PRIORITY = 100;
const ee = hoook();

export default class Event extends Base {
  events = {};

  plugins = {};

  /**
   * @type {App}
   */
  app;

  loaded = {};
  on = ee.hook;
  off = ee.unhook;

  constructor(options = {}) {
    super(options);
    this.app = this.wei.get('app');
  }

  trigger(...args) {
    this.loadEvent(args[0], () => {
      ee.fire(...args);
    });
  }

  loadEvent(event, fn) {
    if (this.loaded[event]) {
      fn();
      return;
    }
    this.loaded[event] = true;

    if (typeof this.events[event] === 'undefined') {
      fn();
      return;
    }

    const promises = [];
    Object.keys(this.events[event]).forEach(priority => {
      this.events[event][priority].forEach(pluginId => {
        if (!this.app.getPluginIds().includes(pluginId)) {
          return;
        }

        const promise = this.plugins[pluginId]();
        promises.push(promise);
        promise.then(fns => {
          priority = parseInt(priority, 10);
          const method = 'on' + ucfirst(priority === DEFAULT_PRIORITY ? event : (event + priority));
          this.on(event, fns.default[method], priority);
        });
      });
    });
    Promise.all(promises).then(fn);
  }
}
