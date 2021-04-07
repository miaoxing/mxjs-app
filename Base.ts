import Wei from './Wei';
// @ts-ignore
import * as ucfirst from 'ucfirst';

export interface ServiceOptions {
  [key: string]: any
}

export default class Base {
  wei: Wei;

  constructor(options: ServiceOptions = {}) {
    this.setOption(options);
  }

  setOption(name: ServiceOptions | string, value: any = null) {
    if (typeof name === 'object') {
      Object.keys(name).forEach(prop => {
        this.setOption(prop, name[prop]);
      });
      return this;
    }

    const method = 'set' + ucfirst(name);
    // @ts-ignore
    if (typeof this[method] !== 'undefined') {
      // @ts-ignore
      this[method](value);
    } else {
      // @ts-ignore
      this[name] = value;
    }
    return this;
  }
}
