## [0.3.1](https://github.com/miaoxing/mxjs-app/compare/v0.3.0...v0.3.1) (2021-05-11)





### Dependencies

* **append-url:** upgrade from `1.0.11` to `1.0.12`
* **@miaoxing/dev:** upgrade from `6.4.0` to `7.0.0`

# [0.3.0](https://github.com/miaoxing/mxjs-app/compare/v0.2.9...v0.3.0) (2021-04-27)


### Bug Fixes

* 解决并发加载事件时，只有第一个加载到数据的问题 ([3e279e8](https://github.com/miaoxing/mxjs-app/commit/3e279e80fc3b524d9dc0c2d670203575c9ed4aa6))


### Code Refactoring

* **app:** 重构事件逻辑 ([4a203e1](https://github.com/miaoxing/mxjs-app/commit/4a203e148e910ed1fa4dcec576ba71be68287086))


### Features

* **Base:** 基类的 `setOption` 方法支持传入 `(name, value)` 两个参数 ([3e937d0](https://github.com/miaoxing/mxjs-app/commit/3e937d0fb0d8f6d9420b38d7022a63f1cd68c2cd))


### BREAKING CHANGES

* **app:** `event`: `trigger` 改为异步执行
* 增加 `loadEvent` 属性用于外部加载事件，移除原有的加载事件逻辑
* 调整事件的数据结构为 `{plugin: {events: {plugins, handlers}}}`
* `app`: `getPluginIds` 方法改为异步，待接口设置了插件编号才返回





### Dependencies

* **append-url:** upgrade from `1.0.10` to `1.0.11`
* **@miaoxing/dev:** upgrade from `6.3.4` to `6.4.0`

## [0.2.9](https://github.com/miaoxing/mxjs-app/compare/v0.2.8...v0.2.9) (2021-03-22)





### Dependencies

* **append-url:** upgrade from `1.0.9` to `1.0.10`
* **@miaoxing/dev:** upgrade from `6.3.3` to `6.3.4`

## [0.2.8](https://github.com/miaoxing/mxjs-app/compare/v0.2.7...v0.2.8) (2021-03-12)





### Dependencies

* **append-url:** upgrade from `1.0.8` to `1.0.9`
* **@miaoxing/dev:** upgrade from `6.3.2` to `6.3.3`

## [0.2.7](https://github.com/miaoxing/mxjs-app/compare/v0.2.6...v0.2.7) (2021-03-10)


### Bug Fixes

* 增加依赖的包 ([28e92c4](https://github.com/miaoxing/mxjs-app/commit/28e92c4e333557bf2025d7b25a4cf91358f9d9eb))

## [0.2.6](https://github.com/miaoxing/mxjs-app/compare/v0.2.5...v0.2.6) (2021-03-10)





### Dependencies

* **append-url:** upgrade from 1.0.7 to 1.0.8
* **@miaoxing/dev:** upgrade from 6.3.1 to 6.3.2

## [0.2.5](https://github.com/miaoxing/mxjs-app/compare/v0.2.4...v0.2.5) (2021-03-09)





### Dependencies

* **append-url:** upgrade from 1.0.6 to 1.0.7
* **@miaoxing/dev:** upgrade from 6.3.0 to 6.3.1

## [0.2.4](https://github.com/miaoxing/mxjs-app/compare/v0.2.3...v0.2.4) (2021-03-09)





### Dependencies

* **append-url:** upgrade from 1.0.5 to 1.0.6
* **@miaoxing/dev:** upgrade from 6.2.0 to 6.3.0

## [0.2.3](https://github.com/miaoxing/mxjs-app/compare/v0.2.2...v0.2.3) (2021-03-05)





### Dependencies

* **append-url:** upgrade from 1.0.4 to 1.0.5
* **@miaoxing/dev:** upgrade from 6.1.2 to 6.2.0

## [0.2.2](https://github.com/miaoxing/mxjs-app/compare/v0.2.1...v0.2.2) (2021-03-05)


### Features

* **Url:** 增加 `passThroughParams` 属性，如果当前请求存在指定参数，则将参数传递到生成 URL 中 ([867cc51](https://github.com/miaoxing/mxjs-app/commit/867cc51ce8fcc1534ac01dae0a8e248271d56a14))

## [0.2.1](https://github.com/miaoxing/mxjs-app/compare/v0.2.0...v0.2.1) (2020-09-25)


### Bug Fixes

* **Router:** 没有匹配到页面, page.params 错误 ([1ba5432](https://github.com/miaoxing/mxjs-app/commit/1ba5432ad52a3da67e616fcdad09c9897d83327b))





### Dependencies

* **append-url:** upgrade from 1.0.3 to 1.0.4
* **@miaoxing/dev:** upgrade from 6.1.1 to 6.1.2

# [0.2.0](https://github.com/miaoxing/mxjs-app/compare/v0.1.4...v0.2.0) (2020-09-01)


### Code Refactoring

* 前端控制器改为 page 模式 ([a154760](https://github.com/miaoxing/mxjs-app/commit/a154760018e37c8e6cbd564fe0af3a797159f4f6))
* 重构 app 包，增加 Req，Url，Event 服务，统一配置 ([7547d72](https://github.com/miaoxing/mxjs-app/commit/7547d72b12672e8f43ee628304f2178c94fe1522))


### BREAKING CHANGES

* 重构 app 包，增加 Req，Url，Event 等服务，统一配置
* 前端控制器改为 page 模式

## [0.1.4](https://github.com/miaoxing/mxjs-app/compare/v0.1.3...v0.1.4) (2020-08-17)





### Dependencies

* **append-url:** upgrade from 1.0.2 to 1.0.3
* **@miaoxing/dev:** upgrade from 6.1.0 to 6.1.1

## [0.1.3](https://github.com/miaoxing/mxjs-app/compare/v0.1.2...v0.1.3) (2020-08-14)





### Dependencies

* **append-url:** upgrade from 1.0.1 to 1.0.2
* **@miaoxing/dev:** upgrade from 6.0.0 to 6.1.0

## [0.1.2](https://github.com/miaoxing/mxjs-app/compare/v0.1.1...v0.1.2) (2020-08-14)





### Dependencies

* **append-url:** upgrade from  to 0.1.0
* **@miaoxing/dev:** upgrade from  to 0.1.0

## [0.1.1](https://github.com/miaoxing/mxjs-app/compare/v0.1.0...v0.1.1) (2020-08-12)





### Dependencies

* **babel-preset-miaoxing:** upgrade from 0.1.2 to 0.1.3

# 0.1.0 (2020-08-12)





### Dependencies

* **babel-preset-miaoxing:** upgrade from 0.1.1 to 0.1.2
