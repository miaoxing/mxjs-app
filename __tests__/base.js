import Base from '../Base';

class Service extends Base {
  name;

  getName() {
    return this.name;
  }
}

describe('base', () => {
  test('setOption(name, value)', () => {
    const service = new Service();
    service.setOption('name', 'test');

    expect(service.getName()).toBe('test');
  });
});
