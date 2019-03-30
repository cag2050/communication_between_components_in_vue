<template>
    <div>
        <table border="1" cellspacing="0" cellpadding="5">
            <tr>
                <td>子组件通过 $parent 设置父组件中 data 里的属性：</td>
                <td>{{ this.name }}</td>
            </tr>
            <tr>
                <td>
                    子组件通过 $parent 调用父组件的方法，设置父组件中 data
                    里的属性：
                </td>
                <td>{{ this.age }}</td>
            </tr>
        </table>

        <child></child>
    </div>
</template>

<script>
import Child from "./Child.vue";

export default {
    name: "Parent",
    components: {
        Child
    },
    data() {
        return {
            name: "",
            age: ""
        };
    },
    mounted() {},
    methods: {
        setAge() {
            this.age = "18";
        }
    }
};
</script>

<style lang="less" scoped></style>
