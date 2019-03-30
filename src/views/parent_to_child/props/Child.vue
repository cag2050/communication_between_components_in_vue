<template>
    <div>
        <table border="1" cellspacing="0" cellpadding="5">
            <tr>
                <td>父组件通过 prop 传递给子组件的值（字符串类型）：</td>
                <td>{{ this.prop_string_required }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "Child",
    props: {
        prop_string_required: {
            type: String,
            required: true
        }
    },
    data() {
        return {};
    }
};
</script>

<style lang="less" scoped></style>
