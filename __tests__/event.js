import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {event} from '../';

describe('event', () => {
  beforeEach(() => {
    event.off('test');
  });

  test('on', () => {
    event.on('test', () => {
    });
    expect(event.has('test')).toBeTruthy();
  });

  test('off', async () => {
    event.on('test', () => {
      return 'a';
    });

    event.off('test');
    expect(event.has('test')).toBeFalsy();

    const resultss = await event.trigger('test');
    expect(resultss).toEqual([]);
  });

  test('trigger', async () => {
    event.on('test', () => {
      return 'a';
    });

    const results = await event.trigger('test');
    expect(results).toEqual(['a']);
  });

  test('trigger two handlers', async () => {
    event.on('test', () => {
      return 'a';
    });
    event.on('test', () => {
      return 'b';
    });

    const results = await event.trigger('test');
    expect(results).toEqual(['a', 'b']);
  });

  test('trigger async', async () => {
    event.on('test', async () => {
      return 'a';
    });

    const results = await event.trigger('test');
    expect(results).toEqual(['a']);
  });

  test('priority', async () => {
    event.on('test', () => {
      return 'a';
    }, 100);

    event.on('test', () => {
      return 'b';
    }, 120);

    const results = await event.trigger('test');
    expect(results).toEqual(['b', 'a']);
  });

  test('results', async () => {
    event.on('test', () => {
      return 'a';
    });

    event.on('test', () => {
    });

    const results = await event.trigger('test');
    expect(results).toEqual(['a', undefined]);
  });

  test('arguments', async () => {
    event.on('test', (args) => {
      args.a++;
    });

    event.on('test', (args) => {
      args.a++;
    });

    const args = {a: 0};
    await event.trigger('test', args);
    expect(args.a).toBe(2);
  });

  test('multiply arguments', async () => {
    event.on('test', (arg1, arg2) => {
      arg1.value++;
      arg2.value--;
    });

    event.on('test', (arg1, arg2) => {
      arg1.value++;
      arg2.value--;
    });

    const arg1 = {value: 0};
    const arg2 = {value: 10};
    await event.trigger('test', [arg1, arg2]);
    expect(arg1.value).toBe(2);
    expect(arg2.value).toBe(8);
  });

  test('loadEvent', async () => {
    const map = {
      test: [
        () => {
          return 'a';
        },
        () => {
          return 'b';
        },
      ],
    };

    const loaded = {};
    event.setOption('loadEvent', (name) => {
      if (loaded[name]) {
        return;
      }
      loaded[name] = true;

      (map[name] || []).forEach(fn => {
        event.on(name, fn);
      });
    });

    const results = await event.trigger('test');
    expect(results).toEqual(['a', 'b']);

    const results2 = await event.trigger('test2');
    expect(results2).toEqual([]);

    event.setOption('loadEvent', null);
  });

  test('loadEvent parallel', async () => {
    const map = {
      test: [
        () => {
          return 'a';
        },
      ],
    };

    const waits = {};
    const wait = async(name, fn) => {
      let resolve;

      if (waits[name]) {
        await waits[name];
      } else {
        waits[name] = new Promise((res) => {
          resolve = res;
        });
      }

      const result = await fn();
      resolve && resolve();

      return result;
    };

    const loaded = {};
    event.setOption('loadEvent', async (name) => {
      return wait(name, async () => {
        if (loaded[name]) {
          return;
        }
        loaded[name] = true;

        // 模拟并发加载慢，导致重复调用的情况
        await new Promise(r => setTimeout(r, 10));

        (map[name] || []).forEach(fn => {
          event.on(name, fn);
        });
      });
    });

    const results = await Promise.all([event.trigger('test'), event.trigger('test'), event.trigger('test')]);
    expect(results).toEqual([['a'], ['a'], ['a']]);

    event.setOption('loadEvent', null);
  });
});
