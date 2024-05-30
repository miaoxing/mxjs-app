# [0.8.0](https://github.com/miaoxing/mxjs-app/compare/v0.7.0...v0.8.0) (2024-05-30)


### Features

* **app:** `Req` 移除 `history` 依赖，允许通过设置 location 获取参数 ([5b20eb6](https://github.com/miaoxing/mxjs-app/commit/5b20eb60227725ad67d1e293eaf34e1ecf138def))
* **app, experimental:** `URL` 增加 `appendLimit` 方法，用于给 URL 加上最大限制数量 ([1dfe0b8](https://github.com/miaoxing/mxjs-app/commit/1dfe0b82a17675b0ed8cbef5f3ec759822407451))
* **app, experimental:** 移除 `history` 对象，改为使用 `react-router` 的 `useLocation` ([ab70c33](https://github.com/miaoxing/mxjs-app/commit/ab70c334c31526574980d45bd6c70bdff4c18173))
* **app, experimental:** 移除 `url.full` 方法 ([4ce2f6a](https://github.com/miaoxing/mxjs-app/commit/4ce2f6a88c80ec313e125a12534b2e8baa78f988))


### BREAKING CHANGES

* **app:** `Req` 移除 `history` 依赖，允许通过设置 location 获取参数

# [0.7.0](https://github.com/miaoxing/mxjs-app/compare/v0.6.6...v0.7.0) (2024-05-01)


### Bug Fixes

* **app:** 解决 `Router` 未设置 `pages` 时，调用 `match` 出错 ([2657cf7](https://github.com/miaoxing/mxjs-app/commit/2657cf782bfc80d7f21bb249b1cde13cfe993cdd))


### Features

* **app:** 默认 API 接口使用重写 ([f8a7f8b](https://github.com/miaoxing/mxjs-app/commit/f8a7f8b9539ab307e12761b56e6493144c0f99ca))
* **app:** 默认路由使用 `browser` 模式 ([bca15ef](https://github.com/miaoxing/mxjs-app/commit/bca15ef61c1df7abf682df351b25a50dae0a45f4))


### BREAKING CHANGES

* **app:** 默认路由使用 `browser` 模式
* **app:** 默认 API 接口使用重写

## [0.6.6](https://github.com/miaoxing/mxjs-app/compare/v0.6.5...v0.6.6) (2024-03-31)





### Dependencies

* **append-url:** upgrade from `1.0.26` to `1.0.27`
* **@miaoxing/dev:** upgrade from `9.1.0` to `9.1.1`

## [0.6.5](https://github.com/miaoxing/mxjs-app/compare/v0.6.4...v0.6.5) (2024-01-08)





### Dependencies

* **append-url:** upgrade from `1.0.25` to `1.0.26`
* **@miaoxing/dev:** upgrade from `9.0.0` to `9.1.0`

## [0.6.4](https://github.com/miaoxing/mxjs-app/compare/v0.6.3...v0.6.4) (2023-12-31)





### Dependencies

* **append-url:** upgrade from `1.0.24` to `1.0.25`
* **@miaoxing/dev:** upgrade from `8.2.4` to `9.0.0`

## [0.6.3](https://github.com/miaoxing/mxjs-app/compare/v0.6.2...v0.6.3) (2023-11-30)





### Dependencies

* **append-url:** upgrade from `1.0.23` to `1.0.24`
* **@miaoxing/dev:** upgrade from `8.2.3` to `8.2.4`

## [0.6.2](https://github.com/miaoxing/mxjs-app/compare/v0.6.1...v0.6.2) (2023-09-02)





### Dependencies

* **append-url:** upgrade from `1.0.22` to `1.0.23`
* **@miaoxing/dev:** upgrade from `8.2.2` to `8.2.3`

## [0.6.1](https://github.com/miaoxing/mxjs-app/compare/v0.6.0...v0.6.1) (2023-07-31)





### Dependencies

* **append-url:** upgrade from `1.0.21` to `1.0.22`
* **@miaoxing/dev:** upgrade from `8.2.1` to `8.2.2`

# [0.6.0](https://github.com/miaoxing/mxjs-app/compare/v0.5.5...v0.6.0) (2023-06-30)


### Code Refactoring

* **app:** 后台接口路径由 `admin-api` 改为 `api/admin` ([82b8f5d](https://github.com/miaoxing/mxjs-app/commit/82b8f5d4786e8818afdde9a139f1cbb0ece786f1))


### BREAKING CHANGES

* **app:** 后台接口路径由 `admin-api` 改为 `api/admin`

## [0.5.5](https://github.com/miaoxing/mxjs-app/compare/v0.5.4...v0.5.5) (2023-05-31)





### Dependencies

* **append-url:** upgrade from `1.0.20` to `1.0.21`
* **@miaoxing/dev:** upgrade from `8.2.0` to `8.2.1`

## [0.5.4](https://github.com/miaoxing/mxjs-app/compare/v0.5.3...v0.5.4) (2023-01-01)





### Dependencies

* **append-url:** upgrade from `1.0.19` to `1.0.20`
* **@miaoxing/dev:** upgrade from `8.1.3` to `8.2.0`

## [0.5.3](https://github.com/miaoxing/mxjs-app/compare/v0.5.2...v0.5.3) (2022-08-02)


### Bug Fixes

* **mxjs-app:** 解决 hash 路由器模式下，`req.get` 获取不到参数值 ([42aca8c](https://github.com/miaoxing/mxjs-app/commit/42aca8c93de0e211fd55b694e33dce9a9773ea85))





### Dependencies

* **append-url:** upgrade from `1.0.18` to `1.0.19`
* **@miaoxing/dev:** upgrade from `8.1.2` to `8.1.3`

## [0.5.2](https://github.com/miaoxing/mxjs-app/compare/v0.5.1...v0.5.2) (2022-07-01)


### Features

* **mxjs-app, experimental:** 增加 `url.full` 方法 ([aba3073](https://github.com/miaoxing/mxjs-app/commit/aba3073806a229fd23441051ebfff6651f465928))





### Dependencies

* **append-url:** upgrade from `1.0.17` to `1.0.18`
* **@miaoxing/dev:** upgrade from `8.1.1` to `8.1.2`

## [0.5.1](https://github.com/miaoxing/mxjs-app/compare/v0.5.0...v0.5.1) (2022-06-06)


### Bug Fixes

* **mxjs-app:** `globalThis` 改为 `window`，解决 node 10 测试失败 ([dcae6a8](https://github.com/miaoxing/mxjs-app/commit/dcae6a8cfd0558fac7c340870d1d1ad169589544))

# [0.5.0](https://github.com/miaoxing/mxjs-app/compare/v0.4.3...v0.5.0) (2022-06-01)


### Bug Fixes

* **app:** 解决测试等场景提示错误：`ReferenceError: miaoxing is not defined` ([159ebb4](https://github.com/miaoxing/mxjs-app/commit/159ebb44e8176bd15cbc0b72d2cc17da5d04cbd5))


### Features

* **app:** Url 服务增加 `apiPath` 选项，定义了接口的路径，用于区分不同的系统 ([7753ffb](https://github.com/miaoxing/mxjs-app/commit/7753ffbb10f4bb3e88c7b28436d467b0b0a9acad))
* **app:** 生成 URL 默认为不开启重写模式 ([5250ffa](https://github.com/miaoxing/mxjs-app/commit/5250ffa73e00283a9d2045db826cba11816a41bd))
* **app:** 获取路径信息支持 hash 路由器模式 ([507d775](https://github.com/miaoxing/mxjs-app/commit/507d775708c0a856cbbc84483070b681b4a0558e))
* **u, app:** 允许配置 `miaoxing.routerMode` 来指定路由模式 ([cc2b64e](https://github.com/miaoxing/mxjs-app/commit/cc2b64e6d486379ce106cbd206e772bfc2de0ddd))


### BREAKING CHANGES

* **u, app:** 默认路由模式改为 `hash`





### Dependencies

* **append-url:** upgrade from `1.0.16` to `1.0.17`
* **@miaoxing/dev:** upgrade from `8.1.0` to `8.1.1`

## [0.4.3](https://github.com/miaoxing/mxjs-app/compare/v0.4.2...v0.4.3) (2022-03-31)


### Bug Fixes

* **mxjs-app:** 接口地址忽略结尾的 `/` ([901d6b0](https://github.com/miaoxing/mxjs-app/commit/901d6b0157b7b57ec3dbdf3827c7da08c68b51b5))

## [0.4.2](https://github.com/miaoxing/mxjs-app/compare/v0.4.1...v0.4.2) (2022-03-04)


### Bug Fixes

* **app:** 获取路径信息时，忽略结尾 `/` ([75e506e](https://github.com/miaoxing/mxjs-app/commit/75e506ebb746bf03e355c0029f25bd88e7542069))

## [0.4.1](https://github.com/miaoxing/mxjs-app/compare/v0.4.0...v0.4.1) (2022-02-05)





### Dependencies

* **append-url:** upgrade from `1.0.15` to `1.0.16`
* **@miaoxing/dev:** upgrade from `8.0.1` to `8.1.0`

# [0.4.0](https://github.com/miaoxing/mxjs-app/compare/v0.3.3...v0.4.0) (2022-01-12)


### Bug Fixes

* **mxjs-app:** 更改 `addClasses` 参数为对象形式，解决 `terser` 默认压缩后获取不到对象名称的问题 ([08ba182](https://github.com/miaoxing/mxjs-app/commit/08ba182cb9fa3d5e28f654d7989239c712e45cec))


### BREAKING CHANGES

* **mxjs-app:** 更改 `addClasses` 参数为对象形式，解决 `terser` 默认压缩后获取不到对象名称的问题





### Dependencies

* **append-url:** upgrade from `1.0.14` to `1.0.15`
* **@miaoxing/dev:** upgrade from `8.0.0` to `8.0.1`

## [0.3.3](https://github.com/miaoxing/mxjs-app/compare/v0.3.2...v0.3.3) (2021-10-28)





### Dependencies

* **append-url:** upgrade from `1.0.13` to `1.0.14`
* **@miaoxing/dev:** upgrade from `7.0.1` to `8.0.0`

## [0.3.2](https://github.com/miaoxing/mxjs-app/compare/v0.3.1...v0.3.2) (2021-05-12)





### Dependencies

* **append-url:** upgrade from `1.0.12` to `1.0.13`
* **@miaoxing/dev:** upgrade from `7.0.0` to `7.0.1`

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
