import {url, history} from '../';

describe('app', () => {
  test('url', () => {
    expect(url.to('abc')).toBe('/abc');

    expect(url.to('abc?a=b')).toBe('/abc?a=b');
  });

  test('api url', () => {
    url.setOption('apiRewrite', true);

    expect(url.api('users')).toBe('/api/users');

    expect(url.api('users?a=b')).toBe('/api/users?a=b');

    const originalPathname = history.location.pathname;
    history.location.pathname = '/admin';

    expect(url.api('users')).toBe('/admin-api/users');

    expect(url.api('users?a=b')).toBe('/admin-api/users?a=b');

    url.setOption('apiRewrite', false);

    history.location.pathname = originalPathname;
  });

  test('generate api url with url rewrite', () => {
    expect(url.api('users')).toBe('/index.php?r=api%2Fusers');

    expect(url.api('users?a=b')).toBe('/index.php?r=api%2Fusers&a=b');

    expect(url.api('users?a=b', {key: 'value'})).toBe('/index.php?r=api%2Fusers&a=b&key=value');

    expect(url.api('users/%s?a=b', 1, {key: 'value'})).toBe('/index.php?r=api%2Fusers%2F1&a=b&key=value');
  });

  test('should overwrite params', () => {
    expect(url.api('users?a=b', {a: 'c'})).toBe('/index.php?r=api%2Fusers&a=c');
  });

  test('should ignore router param', () => {
    expect(url.api('users?r=test', {a: 'b'})).toBe('/index.php?r=api%2Fusers&a=b');
  });
});



