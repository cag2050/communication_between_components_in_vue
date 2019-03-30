<template>
    <div>
        <table border="1" cellspacing="0" cellpadding="5">
            <tr>
                <td>子组件部分：</td>
                <td>子组件接收的字符串类型 prop 值：</td>
                <td>{{ prop_string }}</td>
                <td>
                    <button @click="childChangeStringProp">
                        子组件修改接收的字符串类型 prop（不再报错）
                    </button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "Child",
    props: {
        prop_string: {
            type: String
        }
    },
    data() {
        return {};
    },
    methods: {
        childChangeStringProp() {
            this.$emit("update:prop_string", "子组件修改了");
        }
    }
};
</script>

<style lang="less" scoped></style>
