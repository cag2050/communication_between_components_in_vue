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
                <td>
                    <button @click="parentChangeStringProp">
                        父组件修改传递的字符串类型 prop（正常）
                    </button>
                </td>
                <td>父组件传递的数组类型 prop 值：</td>
                <td>{{ array1 }}</td>
                <td>
                    <button @click="parentChangeArrayTypeProp">
                        父组件修改传递的数组类型 prop（正常）
                    </button>
                </td>
            </tr>
        </table>

        <child :prop_string="string1" :prop_array_required="array1"></child>
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
            string1: "str from parent",
            array1: [1, 2, 3]
        };
    },
    methods: {
        parentChangeStringProp() {
            this.string1 = "父组件修改了";
        },
        parentChangeArrayTypeProp() {
            this.array1.shift();
        }
    }
};
</script>

<style lang="less" scoped></style>
