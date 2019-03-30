<template>
    <div>
        <child ref="child"></child>
        <button @click="setChildDataName">
            点击：父组件通过 ref 设置子组件中 data 里的属性
        </button>
        <button @click="callChildMethodSetAge">
            点击：父组件通过 ref 调用子组件的方法，设置子组件中 data 里的属性
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
    methods: {
        setChildDataName() {
            this.$refs.child.name = "jeff";
        },
        callChildMethodSetAge() {
            this.$refs.child.age = "18";
        }
    }
};
</script>

<style lang="less" scoped></style>
