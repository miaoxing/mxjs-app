import appendUrl from 'append-url';
import qs from 'query-string';

class App {
  /**
   * 是否启用调试模式
   *
   * @type {boolean}
   */
  debug = true;

  /**
   * 应用的基础地址
   *
   * 如果代码不是在根目录下，或者是小程序，则应该设置该属性
   *
   * @type {string}
   */
  baseUrl = '';

  /**
   * 应用的接口地址
   *
   * 如果代码分开部署，或者是小程序，则应该设置该属性
   *
   * @type {string}
   */
  baseApiUrl = '';

  namespace = '';
  controller = '';
  action = '';
  id = '';

  url(url = '', argsOrParams, params) {
    return this.baseUrl + '/' + generateUrl(url, argsOrParams, params);
  }

  apiUrl(url = '', argsOrParams, params) {
    url = (app.namespace ? (app.namespace + '-api') : 'api') + '/' + url;
    return this.baseApiUrl + this.url(url, argsOrParams, params);
  }

  /**
   * 获取URL中的参数
   *
   * @link http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
   */
  req(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  isUrlRewrite() {
    return !this.req('r');
  }
}

const app = new App();

function generateUrl(url = '', argsOrParams = {}, params = {}) {
  if (app.isUrlRewrite()) {
    return appendUrl(url, argsOrParams, params);
  }

  if (url.indexOf('%s') !== -1) {
    url = appendUrl(url, argsOrParams)
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

export default app;
