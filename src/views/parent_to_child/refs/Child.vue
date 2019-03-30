<template>
    <div>
        <table border="1" cellspacing="0" cellpadding="5">
            <tr>
                <td>父组件通过 ref 设置子组件中 data 里的属性：</td>
                <td>{{ this.name }}</td>
            </tr>
            <tr>
                <td>
                    父组件通过 ref 调用子组件的方法，设置子组件中 data
                    里的属性：
                </td>
                <td>{{ this.age }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "Child",
    data() {
        return {
            name: "",
            age: ""
        };
    }
};
</script>

<style lang="less" scoped></style>
