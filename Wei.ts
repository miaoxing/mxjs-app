import Base, {ServiceOptions} from './Base';
import {lcfirst} from './string';

interface Services {
  [key: string]: Base
}

export default class Wei extends Base {
  /**
   * 是否启用调试模式
   */
  protected debug = true;

  protected services: Services = {};

  constructor(options: ServiceOptions = {}) {
    super(options);
    this.set('wei', this);
  }

  get(name: string): Base {
    return this.services[name];
  }

  set(name: string, service: Base): this {
    this.services[name] = service;
    return this;
  }

  addClasses(classes: Record<string, typeof Base>): Services {
    const services: Services = {};
    Object.keys(classes).forEach(name => {
      const lowerName = lcfirst(name);
      const service = new classes[name]({wei: this});
      this.set(lowerName, service);
      services[lowerName] = service;
    });
    return services;
  }

  setConfigs(configs: Record<string, Record<string, unknown>>): void {
    Object.keys(configs).forEach(name => {
      const config = configs[name];
      const service = this.get(name);
      if (service) {
        service.setOption(config);
      }
      // ignore service not found currently.
    });
  }

  getDebug(): boolean {
    return this.debug;
  }

  setDebug(debug: boolean): void {
    this.debug = debug;
  }
}
