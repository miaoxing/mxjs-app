import Base, {ServiceOptions} from './Base';
import * as qs from 'query-string';
import {ParsedQuery} from 'query-string';

declare global {
  const miaoxing: {
    baseUrl: string
  };
}

type Params = Record<string, string>;

export default class Req extends Base {
  protected baseUrl = '';

  protected routerParams: Params = {};

  protected qs: Record<string, ParsedQuery> = {};

  constructor(options: ServiceOptions = {}) {
    super(options);

    if (typeof miaoxing !== 'undefined' && miaoxing.baseUrl) {
      this.baseUrl = miaoxing.baseUrl;
    }
  }

  /**
   * 获取URL中的参数
   */
  get(name: string): string | string[] | null {
    if (typeof this.routerParams[name] !== 'undefined') {
      return this.routerParams[name];
    }

    const search = window.location.search;
    if (typeof this.qs[search] === 'undefined') {
      // Only cache last query string
      this.qs = {
        [search]: qs.parse(search),
      };
    }

    return this.qs[search][name] ?? null;
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }

  getPathInfo(location?: Location): string {
    if (this.isUrlRewrite()) {
      const pathname = location ? location.pathname : window.location.pathname;
      return pathname.substr(this.baseUrl.length);
    } else {
      return '/' + this.get('r');
    }
  }

  isUrlRewrite(): boolean {
    return !this.get('r');
  }

  setRouterParams(params: Params): this {
    this.routerParams = params;
    return this;
  }
}
