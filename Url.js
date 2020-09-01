import Base from './Base';
import appendUrl from 'append-url';
import qs from 'query-string';

export default class Url extends Base {
  /**
   * @type {string}
   */
  baseApiUrl = '';

  /**
   * @type {Req}
   */
  req;

  constructor(options = {}) {
    super(options);
    this.req = this.wei.get('req');
  }

  to(url = '', argsOrParams, params) {
    return this.req.getBaseUrl() + '/' + this.appendUrl(url, argsOrParams, params);
  }

  api(url = '', argsOrParams, params) {
    url = (this.isAdmin() ? 'admin-api' : 'api') + '/' + url;
    return this.baseApiUrl + this.to(url, argsOrParams, params);
  }

  appendUrl(url = '', argsOrParams = {}, params = {}) {
    if (this.req.isUrlRewrite()) {
      return appendUrl(url, argsOrParams, params);
    }

    if (url.indexOf('%s') !== -1) {
      url = appendUrl(url, argsOrParams);
      argsOrParams = params;
    }

    // Add router path info into URL
    if (url) {
      let query;
      if (url.indexOf('?') !== -1) {
        const result = qs.parseUrl(url);
        url = result.url;
        query = result.query;

        // Ignore router param
        delete query.r;
      }
      argsOrParams = Object.assign({r: url}, query, argsOrParams);
    }

    return appendUrl('', argsOrParams);
  }

  /**
   * @private
   */
  isAdmin() {
    return this.req.getPathInfo().indexOf('/admin') === 0;
  }
}
