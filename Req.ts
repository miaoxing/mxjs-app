/* global miaoxing */

import Base, {ServiceOptions} from './Base';
import * as qs from 'query-string';

export default class Req extends Base {
  protected baseUrl: string = '';

  protected routerParams: Record<string, string> = {};

  protected qs: Record<string, any> = {};

  constructor(options: ServiceOptions = {}) {
    super(options);

    // @ts-ignore
    if (typeof miaoxing.baseUrl !== 'undefined') {
      // @ts-ignore
      this.baseUrl = miaoxing.baseUrl;
    }
  }

  /**
   * 获取URL中的参数
   */
  get(name: string): string {
    if (typeof this.routerParams[name] !== 'undefined') {
      return this.routerParams[name];
    }

    const search = window.location.search;
    if (typeof this.qs[search] === 'undefined') {
      // Only cache last query string
      this.qs = {
        [search]: qs.parse(search)
      };
    }

    return this.qs[search][name] ?? null;
  }

  getBaseUrl() {
    return this.baseUrl;
  }

  getPathInfo(location?: Location) {
    if (this.isUrlRewrite()) {
      const pathname = location ? location.pathname : window.location.pathname;
      return pathname.substr(this.baseUrl.length);
    } else {
      return '/' + this.get('r');
    }
  }

  isUrlRewrite() {
    return !this.get('r');
  }

  setRouterParams(params: Record<string, string>) {
    this.routerParams = params;
    return this;
  }
}
