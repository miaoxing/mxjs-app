import Base from './Base';

export default class Event extends Base {
  /**
   * An object contains the event handlers
   *
   * @protected
   */
  handlers = {};

  /**
   * A callback that will called when an event triggered
   *
   * @protected
   * @type Function
   */
  loadEvent;

  on(name, fn, priority = 0) {
    this.initHandlers(name, priority).push(fn);
    return this;
  }

  off(name) {
    delete this.handlers[name];
  }

  async trigger(name, args) {
    this.loadEvent && await this.loadEvent(name);

    if (!Array.isArray(args)) {
      args = [args];
    }

    let results = [];
    const events = this.initHandlers(name);

    // key 是数字字符串，从小到大排列，因此需反转后再调用
    for (const priority of Object.keys(events).reverse()) {
      const handlerResults = [];
      for (const handler of events[priority]) {
        handlerResults.push(handler(...args));
      }
      // 相同优先级的一起运行
      results = results.concat(await Promise.all(handlerResults));
    }

    return results;
  }

  has(name) {
    return typeof this.handlers[name] !== 'undefined';
  }

  /**
   * @protected
   */
  initHandlers(name, priority) {
    if (typeof this.handlers[name] === 'undefined') {
      this.handlers[name] = {};
    }

    if (typeof priority !== 'undefined') {
      if (typeof this.handlers[name][priority] === 'undefined') {
        this.handlers[name][priority] = [];
      }
      return this.handlers[name][priority];
    }

    return this.handlers[name];
  }

  /**
   * @protected
   */
  initHandlerPriority(name, priority) {
    if (typeof this.handlers[name][priority] === 'undefined') {
      this.handlers[name][priority] = [];
    }
    return this.handlers[name][priority];
  }
}
