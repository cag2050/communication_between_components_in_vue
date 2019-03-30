<template>
    <div>
        <table
            border="1"
            cellspacing="0"
            cellpadding="5"
            style="margin-bottom: 10px;"
        >
            <tr>
                <td>父组件部分：</td>
                <td>父组件传递的字符串类型 prop 值：</td>
                <td>{{ string1 }}</td>
            </tr>
        </table>

        <child :prop_string.sync="string1"></child>
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
            string1: "str from parent"
        };
    },
    methods: {}
};
</script>

<style lang="less" scoped></style>
