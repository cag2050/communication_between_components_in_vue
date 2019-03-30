<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
        <h3>父组件传给子组件：</h3>
        <ol>
            <li>
                <router-link to="/parent_to_child/props"
                    >父组件通过 Prop 向子组件传递数据（推荐使用）
                </router-link>
            </li>
            <li>
                <router-link to="/parent_to_child/refs"
                    >父组件通过 ref 设置子组件的值（可以使用）
                </router-link>
            </li>
            <li>
                <router-link to="/parent_to_child/$children"
                    >父组件通过 $children 设置子组件的值（$children
                    并不保证顺序，开发者不应该依赖子组件的顺序，也不是响应式的）（节制使用）
                </router-link>
            </li>
            <li>
                <router-link to="/parent_to_child/slot"
                    >父组件通过 v-slot 设置值，子组件通过带 name 的 slot
                    接收值（推荐使用）
                </router-link>
            </li>
        </ol>
        <h3>子组件传给父组件：</h3>
        <ol>
            <li>
                <router-link to="/child_to_parent/v-on_emit"
                    >父组件通过 v-on
                    监听子组件的事件，然后父组件使用子组件触发事件抛出的值（本例中，值是一个1到100之内的随机数）</router-link
                >
            </li>
            <li>
                <router-link to="/child_to_parent/child_component_change_prop"
                    >子组件修改接收的基本类型 prop，会报错（如果一定要改，以
                    update:myPropName
                    的模式触发事件实现，即下面第3种方法）</router-link
                >
            </li>
            <li>
                <router-link to="/child_to_parent/sync_emit_update"
                    >子组件修改父组件传来的 prop，然后 emit 一个 update
                    事件，父组件监听该事件并更新自己的
                    prop（是自定义事件的语法糖）</router-link
                >
            </li>
        </ol>
        <div>===以下是路由的页面内容===</div>
        <router-view />
    </div>
</template>

<style lang="less">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
}

#nav {
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
