# communication_between_components_in_vue

### vue cli 配置选择项：
Babel、Router(history mode)、Vuex、CSS Pre-processors(Less)、Linter / Formatter(Prettier, Lint and fix on commit)、In dedicated config files

### 父组件传递给子组件


### 注意事项：
1. 节制地使用 $parent 和 $children - 它们的主要目的是作为访问组件的应急方法。更推荐用 props 和 events 实现父子组件通信（ https://cn.vuejs.org/v2/api/#parent ）

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
