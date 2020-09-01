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

  setOption(options: ServiceOptions) {
    Object.keys(options).forEach(prop => {
      const method = 'set' + ucfirst(prop);
      // @ts-ignore
      if (typeof this[method] !== 'undefined') {
        // @ts-ignore
        this[method](options[prop]);
      } else {
        // @ts-ignore
        this[prop] = options[prop];
      }
    });
  }
}
