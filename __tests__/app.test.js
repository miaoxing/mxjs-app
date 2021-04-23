import 'core-js/stable';
import 'regenerator-runtime/runtime';
import {url} from '../';

describe('app', () => {
  const originalLocation = window.location;

  beforeEach(() => {
    delete window.location;
    window.location = {
      pathname: '',
      href: '',
    };
  });

  afterEach(() => {
    window.location = originalLocation;
  });

  test('url', () => {
    expect(url.to('abc')).toBe('/abc');

    expect(url.to('abc?a=b')).toBe('/abc?a=b');
  });

  test('generate url with url rewrite', () => {
    window.location.search = '?r=test';

    expect(url.to('users')).toBe('/?r=users');

    expect(url.to('users', {key: 'value'})).toBe('/?r=users&key=value');

    expect(url.to('users/%s', 1,{key: 'value'})).toBe('/?r=users%2F1&key=value');
  });

  test('api url', () => {
    expect(url.api('users')).toBe('/api/users');

    expect(url.api('users?a=b')).toBe('/api/users?a=b');

    window.location.pathname = '/admin';

    expect(url.api('users')).toBe('/admin-api/users');

    expect(url.api('users?a=b')).toBe('/admin-api/users?a=b');
  });

  test('generate api url with url rewrite', () => {
    window.location.search = '?r=test';

    expect(url.api('users')).toBe('/?r=api%2Fusers');

    expect(url.api('users?a=b')).toBe('/?r=api%2Fusers&a=b');

    expect(url.api('users?a=b', {key: 'value'})).toBe('/?r=api%2Fusers&a=b&key=value');

    expect(url.api('users/%s?a=b', 1,{key: 'value'})).toBe('/?r=api%2Fusers%2F1&a=b&key=value');
  });

  test('should overwrite params', () => {
    window.location.search = '?r=test';
    expect(url.api('users?a=b', {a: 'c'})).toBe('/?r=api%2Fusers&a=c');
  });

  test('should ignore router param', () => {
    window.location.search = '?r=test';
    expect(url.api('users?r=test', {a: 'b'})).toBe('/?r=api%2Fusers&a=b');
  });
});



