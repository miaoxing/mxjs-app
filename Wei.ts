// @ts-ignore
import * as lcfirst from 'lcfirst';
import Base, {ServiceOptions} from "./Base";

interface Services {
  [key: string]: Base
}

export default class Wei extends Base {
  /**
   * 是否启用调试模式
   */
  protected debug: boolean = true;

  protected services: Services = {};

  constructor(options: ServiceOptions = {}) {
    super(options);
    this.set('wei', this);
  }

  get(name: string) {
    return this.services[name];
  }

  set(name: string, service: Base) {
    this.services[name] = service;
    return this;
  }

  addClasses(classes: any) {
    let services: Services = {};
    classes.forEach((cls: any) => {
      const name = lcfirst(cls.name);
      const service = new cls({wei: this});
      this.set(name, service);
      services[name] = service;
    });
    return services;
  }

  setConfigs(configs: Record<string, Record<string, any>>) {
    Object.keys(configs).forEach(name => {
      const config = configs[name];
      const service = this.get(name);
      if (service) {
        service.setOption(config);
      }
      // ignore service not found currently.
    });
  }

  getDebug() {
    return this.debug;
  }

  setDebug(debug: boolean) {
    this.debug = debug;
  }
}
