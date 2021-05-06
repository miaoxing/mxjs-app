import Wei from './Wei';
// @ts-ignore 缺少类型声明
import * as ucfirst from 'ucfirst';

export interface ServiceOptions {
  [key: string]: unknown
}

export default class Base {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;

  wei: Wei;

  constructor(options: ServiceOptions = {}) {
    this.setOption(options);
  }

  setOption(name: ServiceOptions | string, value: unknown = null): this {
    if (typeof name === 'object') {
      Object.keys(name).forEach(prop => {
        this.setOption(prop, name[prop]);
      });
      return this;
    }

    const method = 'set' + ucfirst(name);
    if (typeof this[method] !== 'undefined') {
      this[method](value);
    } else {
      this[name] = value;
    }
    return this;
  }
}
