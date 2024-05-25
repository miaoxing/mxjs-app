import Base from './Base';
import appendUrl from 'append-url';
import qs from 'query-string';

export default class Url extends Base {
  /**
   * @type {string}
   */
  baseApiUrl = '';

  /**
   * @type {boolean}
   */
  apiRewrite = true;

  /**
   * 接口的路径，用于区分不同的系统，如 "api/admin"
   *
   * @type {string}
   */
  apiPath = '';

  /**
   * @type {Array}
   * @experimental
   */
  passThroughParams = [
    'appId',
  ];

  /**
   * @type {Req}
   */
  req;

  /**
   * 后台允许返回的最大数据量
   * @experimental
   * @type {number}
   */
  maxLimit = 500;

  constructor(options = {}) {
    super(options);
    this.req = this.wei.get('req');
  }

  setBaseApiUrl(baseApiUrl) {
    this.baseApiUrl = baseApiUrl.replace(/\/+$/, '');
  }

  setApiPath(apiPath) {
    this.apiPath = apiPath.replace(/\/+$/, '');
  }

  to(url = '', argsOrParams, params) {
    return this.req.getBaseUrl() + '/' + this.appendUrl(url, argsOrParams, params);
  }

  api(url = '', argsOrParams, params) {
    if (this.apiPath) {
      url = this.apiPath + '/' + url;
    } else {
      url = 'api/' + (this.isAdmin() ? 'admin/' : '') + url;
    }
    return this.baseApiUrl + this.req.getBaseUrl() + '/' + (this.apiRewrite ? '' : 'index.php') + this.appendUrl(url, argsOrParams, params, this.apiRewrite);
  }

  appendUrl(url = '', argsOrParams = {}, params = {}, isRewrite = true) {
    // params may be null
    argsOrParams || (argsOrParams = {});
    params || (params = {});

    const hasArgs = url.indexOf('%s') !== -1;

    let real;
    if (hasArgs) {
      real = params;
    } else {
      real = argsOrParams;
    }

    this.passThroughParams.forEach(param => {
      if (typeof real[param] === 'undefined' && this.req.get(param)) {
        real[param] = this.req.get(param);
      }
    });

    if (isRewrite) {
      return appendUrl(url, argsOrParams, params);
    }

    if (hasArgs) {
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
   * @experimental
   */
  appendLimit(url, limit = this.maxLimit) {
    return appendUrl(url, {limit});
  }

  /**
   * @private
   */
  isAdmin() {
    return this.req.getPathInfo().indexOf('/admin') === 0;
  }
}
