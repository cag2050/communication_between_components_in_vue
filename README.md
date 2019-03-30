# communication_between_components_in_vue

### vue cli 配置选择项：
Babel、Router(history mode)、Vuex、CSS Pre-processors(Less)、Linter / Formatter(Prettier, Lint and fix on commit)、In dedicated config files

### 父组件传递给子组件


### 注意事项：
1. 节制地使用 `$parent` 和 `$children` - 它们的主要目的是作为访问组件的应急方法。更推荐用 v-on_emit 和 events 实现父子组件通信（ https://cn.vuejs.org/v2/api/#parent ）
2. `$children` 并不保证顺序，开发者也不应该依赖子组件的顺序（ https://cn.vuejs.org/v2/api/#vm-children ）；`vm.$children`，类型：`Array<Vue instance>`
3. `$refs` 只会在组件渲染完成之后生效，并且它们不是响应式的
4. 父组件通过 v-on 监听子组件的事件
5. 子组件修改父组件传来的 prop，然后 emit 一个 update ，父组件监听该事件并根据需要更新一个本地的数据属性。

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
