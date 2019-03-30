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
                    >父组件通过 ref 设置子组件的值
                </router-link>
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
