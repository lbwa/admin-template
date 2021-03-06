# Changelog

All notable changes to this project will be documented in this file.

## [0.2.0](https://github.com/lbwa/adminize-template/compare/v0.1.0...v0.2.0) (2019-06-24)


### Build System

* mutate publicPath to './' for more flexibility ([6ae3917](https://github.com/lbwa/adminize-template/commit/6ae3917))


### Features

* **api:** split api based on api functionality ([d897952](https://github.com/lbwa/adminize-template/commit/d897952))
* **login:** add commit and release info ([9c0bb71](https://github.com/lbwa/adminize-template/commit/9c0bb71))
* **request:** rebuild request creator for custom headers ([cab8f0b](https://github.com/lbwa/adminize-template/commit/cab8f0b))



## 0.1.0 (2019-06-23)


### Bug Fixes

* **aside:** nested recursive list implementation ([01af962](https://github.com/lbwa/adminize-template/commit/01af962))
* **aside:** show tooltip when mouse hover collapse aside ([ebd83f7](https://github.com/lbwa/adminize-template/commit/ebd83f7))
* **aside:** upgrade element-ui version to fix unexpected menu collapse ([f6d60fe](https://github.com/lbwa/adminize-template/commit/f6d60fe))
* **Aside:** adjust default icon strategy ([5396d00](https://github.com/lbwa/adminize-template/commit/5396d00))
* **home:** aviod height bounce ([39e87b4](https://github.com/lbwa/adminize-template/commit/39e87b4))
* **login:** call replace() to complate progress bar ([b254777](https://github.com/lbwa/adminize-template/commit/b254777))
* **login:** correct login process ([3fceb17](https://github.com/lbwa/adminize-template/commit/3fceb17))
* **login:** correct multiple login error fix [#11](https://github.com/lbwa/adminize-template/issues/11) ([11f6df3](https://github.com/lbwa/adminize-template/commit/11f6df3))
* correct presisted state logic under dev mode ([690cd75](https://github.com/lbwa/adminize-template/commit/690cd75))
* **login:** correct wrong static reletive path ([9b09737](https://github.com/lbwa/adminize-template/commit/9b09737))
* correct presisted state logic under dev mode([#10](https://github.com/lbwa/adminize-template/issues/10)) ([f62bcec](https://github.com/lbwa/adminize-template/commit/f62bcec))
* **login:** remove routes when login page fix [#13](https://github.com/lbwa/adminize-template/issues/13) ([72d9749](https://github.com/lbwa/adminize-template/commit/72d9749))
* **login:** Should remove use info when use logout ([a7f0893](https://github.com/lbwa/adminize-template/commit/a7f0893))
* **permission:** correct user_info fetching ([bf1a11a](https://github.com/lbwa/adminize-template/commit/bf1a11a))
* **stateSnapshot:** should include global state in the stateSnapshot ([704ef91](https://github.com/lbwa/adminize-template/commit/704ef91))
* **vuex:** correct global state snapshot creation ([75ab9ea](https://github.com/lbwa/adminize-template/commit/75ab9ea))


### Build System

* add `path` config ([b535446](https://github.com/lbwa/adminize-template/commit/b535446))
* config splitChunksPlugin and webpack runtime chunk ([59a6ca6](https://github.com/lbwa/adminize-template/commit/59a6ca6))
* correct filename case error under linux ([abc2f98](https://github.com/lbwa/adminize-template/commit/abc2f98))
* correct filename case error under linux ([ec39f42](https://github.com/lbwa/adminize-template/commit/ec39f42))
* correct publicPath in prod mode ([ece4b4a](https://github.com/lbwa/adminize-template/commit/ece4b4a))
* remove console.* under prod mode ([be7256b](https://github.com/lbwa/adminize-template/commit/be7256b))
* upgrade @vue/cli-service to ^3.3 ([c5431c3](https://github.com/lbwa/adminize-template/commit/c5431c3))
* **deps:** bump fstream from 1.0.11 to 1.0.12 ([6302e43](https://github.com/lbwa/adminize-template/commit/6302e43))
* **deps:** bump js-yaml from 3.12.0 to 3.13.1 ([bd79b48](https://github.com/lbwa/adminize-template/commit/bd79b48))
* **deps:** bump webpack-bundle-analyzer from 3.0.3 to 3.3.2 ([#16](https://github.com/lbwa/adminize-template/issues/16)) ([34e6616](https://github.com/lbwa/adminize-template/commit/34e6616))


### Features

* **routes:** dynamic routes filter and add it to global routes map ([2d90b23](https://github.com/lbwa/adminize-template/commit/2d90b23))
* add element-ui plugin ([d969ecf](https://github.com/lbwa/adminize-template/commit/d969ecf))
* **access:** add optional access functionality ([f32283e](https://github.com/lbwa/adminize-template/commit/f32283e))
* **access:** implement access aproach ([d62063d](https://github.com/lbwa/adminize-template/commit/d62063d))
* **api:** `api` module implementation ([7c8099c](https://github.com/lbwa/adminize-template/commit/7c8099c))
* **App:** implement dynamic layout functionality ([931054c](https://github.com/lbwa/adminize-template/commit/931054c))
* **aside:** add aside title ([ea55a85](https://github.com/lbwa/adminize-template/commit/ea55a85))
* **aside:** routes rendering with meta.title ([229f133](https://github.com/lbwa/adminize-template/commit/229f133))
* **Aside:** implement aside basic recursive rendering ([26c7608](https://github.com/lbwa/adminize-template/commit/26c7608))
* **Aside:** implement rendering logic for route without child route ([3fec701](https://github.com/lbwa/adminize-template/commit/3fec701))
* **Aside:** set initial aside collapse state ([1d96f54](https://github.com/lbwa/adminize-template/commit/1d96f54))
* **Aside:** 一级路由可设置 icon ([d4d17b2](https://github.com/lbwa/adminize-template/commit/d4d17b2))
* **DynamicRoutes:** re-create private routes ([853e64e](https://github.com/lbwa/adminize-template/commit/853e64e))
* **env:** add process.env custom variables ([e930c7f](https://github.com/lbwa/adminize-template/commit/e930c7f))
* **error:** i18n for error page ([23f5e25](https://github.com/lbwa/adminize-template/commit/23f5e25))
* **ErrorPage:** style error page(403 & 404) ([35e179a](https://github.com/lbwa/adminize-template/commit/35e179a))
* **i18n:** add i18n functionality ([46b9a84](https://github.com/lbwa/adminize-template/commit/46b9a84))
* **i18n:** config i18n ([00b3ba1](https://github.com/lbwa/adminize-template/commit/00b3ba1))
* **i18n:** lang switch functionality ([23a2cfd](https://github.com/lbwa/adminize-template/commit/23a2cfd))
* **layout:** skeleton for layout via pure css ([e592cf8](https://github.com/lbwa/adminize-template/commit/e592cf8))
* **layout/login:** add `login` layout ([6557b95](https://github.com/lbwa/adminize-template/commit/6557b95))
* **layout/login:** layout named login completed ([13d96c7](https://github.com/lbwa/adminize-template/commit/13d96c7))
* **layout/material:** add aside layout ([4a0642f](https://github.com/lbwa/adminize-template/commit/4a0642f))
* **layout/material:** add layout placeholder ([7444300](https://github.com/lbwa/adminize-template/commit/7444300))
* **localStorage:** localStorage tools ([c6b3825](https://github.com/lbwa/adminize-template/commit/c6b3825))
* **login:**  add button loading state ([393d5df](https://github.com/lbwa/adminize-template/commit/393d5df))
* **login:** change login page background ([5afdf9b](https://github.com/lbwa/adminize-template/commit/5afdf9b))
* **login:** implement logout functionality ([f34c483](https://github.com/lbwa/adminize-template/commit/f34c483))
* **login:** new login page layout ([64d0b51](https://github.com/lbwa/adminize-template/commit/64d0b51))
* **login:** set default account ([000a37b](https://github.com/lbwa/adminize-template/commit/000a37b))
* **login:** use cookie to store user info ([4979ecc](https://github.com/lbwa/adminize-template/commit/4979ecc))
* **Login:** form validation when user submit form ([5a76c62](https://github.com/lbwa/adminize-template/commit/5a76c62))
* **Login:** login module implementation ([c789ac8](https://github.com/lbwa/adminize-template/commit/c789ac8))
* **logout:** reset all login/state when user logout ([b61dc41](https://github.com/lbwa/adminize-template/commit/b61dc41))
* **material:** material basic measurement ([98b5242](https://github.com/lbwa/adminize-template/commit/98b5242))
* **MaterialAside:**  implement aside collapse state switch ([84a349b](https://github.com/lbwa/adminize-template/commit/84a349b))
* **page:** set new Static Private page for dynamic access verification ([f55c962](https://github.com/lbwa/adminize-template/commit/f55c962))
* **PageFooter:** 抽离 PageFooter 组件 ([93ae02b](https://github.com/lbwa/adminize-template/commit/93ae02b))
* **permission:** add real-time routes filter ([3b3e926](https://github.com/lbwa/adminize-template/commit/3b3e926))
* **permission:** adjust routes filter strategy ([fedc43d](https://github.com/lbwa/adminize-template/commit/fedc43d))
* **permission:** implement user info storage when user start a new session ([ce1c8a1](https://github.com/lbwa/adminize-template/commit/ce1c8a1))
* **permission:** user access fetching error handle ([f372922](https://github.com/lbwa/adminize-template/commit/f372922))
* **request:** add validation request header ([abcb6b0](https://github.com/lbwa/adminize-template/commit/abcb6b0))
* **request:** invoke `logout` process when invalid access_token ([175b5e4](https://github.com/lbwa/adminize-template/commit/175b5e4))
* **route:** implement dynamic routes rendering based on server response ([9cebe36](https://github.com/lbwa/adminize-template/commit/9cebe36))
* **route:** use `public` route to replace `common` route ([c5f8982](https://github.com/lbwa/adminize-template/commit/c5f8982))
* **router:**  add `permission` module and NProgress ([b95664a](https://github.com/lbwa/adminize-template/commit/b95664a))
* **router:** components importer implemented ([edb9a86](https://github.com/lbwa/adminize-template/commit/edb9a86))
* **router:** implement add dynamic routes to global routes ([d6d225d](https://github.com/lbwa/adminize-template/commit/d6d225d))
* **router:** implement dynamic routes rendering when page reloading ([997cb70](https://github.com/lbwa/adminize-template/commit/997cb70))
* **router:** layout switching feature implementation ([b4efaa5](https://github.com/lbwa/adminize-template/commit/b4efaa5))
* implement gloabl state resetting ([e9e66b4](https://github.com/lbwa/adminize-template/commit/e9e66b4))
* **router:** set default scrollBehavior ([f2ac573](https://github.com/lbwa/adminize-template/commit/f2ac573))
* add tips for failure to update data ([ffda010](https://github.com/lbwa/adminize-template/commit/ffda010))
* handle error http status code, add license .etc ([d3479e0](https://github.com/lbwa/adminize-template/commit/d3479e0))
* **routes:** extract constant and dynamic routes into single file ([6582a4c](https://github.com/lbwa/adminize-template/commit/6582a4c))
* **routes:** reset all dynamic routes when user log out ([2b557a0](https://github.com/lbwa/adminize-template/commit/2b557a0))
* **sass:** set global sass variables ([35a35cd](https://github.com/lbwa/adminize-template/commit/35a35cd))
* **storage:** save token to localStorage ([b793af9](https://github.com/lbwa/adminize-template/commit/b793af9))
* **store:** change persisted state strategy ([4fa2cae](https://github.com/lbwa/adminize-template/commit/4fa2cae))
* **style:** add basic sass file ([ee4067a](https://github.com/lbwa/adminize-template/commit/ee4067a))
* **transition:** Routes switching animation ([82bbf6f](https://github.com/lbwa/adminize-template/commit/82bbf6f))
* **vuex:** preserve all state when page reloading ([de9c5fc](https://github.com/lbwa/adminize-template/commit/de9c5fc))
