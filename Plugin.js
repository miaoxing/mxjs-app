import Base from './Base';
import ucfirst from 'ucfirst';

const DEFAULT_PRIORITY = 100;

export default class Plugin extends Base {
  /**
   * @type {App}
   */
  app;

  /**
   * @type {Event}
   */
  event;

  events = {
    plugins: {},
    handlers: {},
  };

  loadedEvents = {};

  constructor(options = {}) {
    super(options);

    this.app = this.wei.get('app');
    this.event = this.wei.get('event');

    this.event.setOption('loadEvent', this.loadEvent.bind(this));
  }

  async loadEvent(name) {
    if (this.loadedEvents[name]) {
      return;
    }
    this.loadedEvents[name] = true;

    const handlers = this.events.handlers[name];
    if (!handlers) {
      return;
    }

    const promises = [];
    const pluginIds = await this.app.getPluginIds();

    Object.keys(handlers).forEach(priority => {
      handlers[priority].forEach(pluginId => {
        priority = parseInt(priority, 10);
        if (!pluginIds.includes(pluginId)) {
          return;
        }

        const promise = this.events.plugins[pluginId]();
        promises.push(promise);
        promise.then(fns => {
          const method = 'on' + ucfirst(priority === DEFAULT_PRIORITY ? name : (name + priority));
          this.event.on(name, fns.default[method], priority);
        });
      });
    });
    return Promise.all(promises);
  }
}
