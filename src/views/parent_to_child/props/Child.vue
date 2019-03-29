<template>
    <div>
        <table border="1" cellspacing="0" cellpadding="5">
            <tr>
                <td>从父组件传来的值（字符串类型）：</td>
                <td>{{ this.prop_str }}</td>
            </tr>
            <tr>
                <td>从父组件传来的值（字符串类型）：</td>
                <td>{{ this.prop_str }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "Child",
    props: {
        prop_str: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="less" scoped></style>
