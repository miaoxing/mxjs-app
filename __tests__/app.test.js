import app from '../';

describe('app', () => {
  const originalLocation = window.location;

  beforeEach(() => {
    delete window.location;
    window.location = {
      href: '',
    };
  });

  afterEach(() => {
    window.location = originalLocation;

    app.namespace = '';
  });

  test('url', () => {
    expect(app.url('abc')).toBe('/abc');

    expect(app.url('abc?a=b')).toBe('/abc?a=b');
  });

  test('generate url with url rewrite', () => {
    window.location.href = '?r=test';

    expect(app.url('users')).toBe('/?r=users');

    expect(app.url('users', {key: 'value'})).toBe('/?r=users&key=value');

    expect(app.url('users/%s', 1,{key: 'value'})).toBe('/?r=users%2F1&key=value');
  });

  test('api url', () => {
    expect(app.apiUrl('users')).toBe('/api/users');

    expect(app.apiUrl('users?a=b')).toBe('/api/users?a=b');

    app.namespace = 'admin';

    expect(app.apiUrl('users')).toBe('/admin-api/users');

    expect(app.apiUrl('users?a=b')).toBe('/admin-api/users?a=b');
  });

  test('generate api url with url rewrite', () => {
    window.location.href = '?r=test';

    expect(app.apiUrl('users')).toBe('/?r=api%2Fusers');

    expect(app.apiUrl('users?a=b')).toBe('/?r=api%2Fusers&a=b');

    expect(app.apiUrl('users?a=b', {key: 'value'})).toBe('/?r=api%2Fusers&a=b&key=value');

    expect(app.apiUrl('users/%s?a=b', 1,{key: 'value'})).toBe('/?r=api%2Fusers%2F1&a=b&key=value');
  });

  test('should overwrite params', () => {
    window.location.href = '?r=test';
    expect(app.apiUrl('users?a=b', {a: 'c'})).toBe('/?r=api%2Fusers&a=c');
  });

  test('should ignore router param', () => {
    window.location.href = '?r=test';
    expect(app.apiUrl('users?r=test', {a: 'b'})).toBe('/?r=api%2Fusers&a=b');
  });
});



