<template>
    <div>
        <child></child>
        <button @click="setChildDataName">
            点击：父组件通过 $children 设置子组件中 data 里的属性
        </button>
        <button @click="callChildMethodSetAge">
            点击：父组件通过 $children 调用子组件的方法，设置子组件中 data
            里的属性
        </button>
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
        return {};
    },
    mounted() {},
    methods: {
        setChildDataName() {
            this.$children[0].name = "jeff";
        },
        callChildMethodSetAge() {
            this.$children[0].setAge();
        }
    }
};
</script>

<style lang="less" scoped></style>
