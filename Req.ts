import Base, {ServiceOptions} from './Base';
import * as qs from 'query-string';
import {ParsedQuery} from 'query-string';
import history from './history';

declare global {
  // @link https://stackoverflow.com/questions/59459312/using-globalthis-in-typescript
  // eslint-disable-next-line no-var
  var miaoxing: {
    routerMode: string;
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
      const pathname = location ? location.pathname : history.location.pathname;
      return this.removeTrailingSlash(pathname.substr(this.baseUrl.length));
    } else {
      return '/' + this.removeTrailingSlash(this.get('r').toString());
    }
  }

  isUrlRewrite(): boolean {
    return !this.get('r');
  }

  setRouterParams(params: Params): this {
    this.routerParams = params;
    return this;
  }

  private removeTrailingSlash(path: string) {
    return path.endsWith('/') ? path.replace(/\/+$/, '') : path;
  }
}
