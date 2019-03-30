<template>
    <div>
        <table border="1" cellspacing="0" cellpadding="5">
            <tr>
                <td>子组件部分：</td>
                <td>子组件接收的字符串类型 prop 值：</td>
                <td>{{ prop_string }}</td>
                <td>
                    <button @click="childChangeStringProp">
                        子组件修改接收的字符串类型 prop（报错）
                    </button>
                </td>
                <td>子组件接收的数组类型 prop 值：</td>
                <td>{{ prop_array_required }}</td>
                <td>
                    <button @click="childChangeArrayTypeProp">
                        子组件修改接收的数组类型 prop（不报错）
                    </button>
                </td>
            </tr>
        </table>

        <div>
            <p>
                父组件修改传递的 prop，是<span style="color: red;">正常</span>的
                prop 单向数据流，子组件根据 prop 变化
            </p>
            <p>
                子组件修改接收的字符串类型 prop，报错信息：[Vue warn]: Avoid
                mutating a prop directly since the value will be overwritten
                whenever the parent component re-renders. Instead, use a data or
                computed property based on the prop's value. Prop being mutated:
                "prop_string"...
            </p>
            <p>
                子组件修改接收的数组类型 prop 不报错，原因：<span
                    style="color: red;"
                    >1.
                    如果props传入的值是引用类型，在子组件中改变其元素，不改变引用，那么不报错；2.
                    如果是基本类型，那么在修改时浏览器控制台会有报错信息</span
                >
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Child",
    props: {
        prop_string: {
            type: String
        },
        prop_array_required: {
            type: Array,
            required: true
        }
    },
    data() {
        return {};
    },
    methods: {
        childChangeArrayTypeProp() {
            this.prop_array_required.shift();
        },
        childChangeStringProp() {
            this.prop_string = "子组件修改了";
        }
    }
};
</script>

<style lang="less" scoped></style>
