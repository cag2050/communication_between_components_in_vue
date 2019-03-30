<template>
    <div>
        <button @click="setParentDataName">
            点击：子组件通过 $parent 设置父组件中 data 里的属性
        </button>
        <button @click="callParentMethodSetAge">
            点击：子组件通过 $parent 调用父组件的方法，设置子组件中 data
            里的属性
        </button>
    </div>
</template>

<script>
export default {
    name: "Child",
    data() {
        return {};
    },
    methods: {
        setParentDataName() {
            this.$parent.name = "jeff";
        },
        callParentMethodSetAge() {
            this.$parent.setAge();
        }
    }
};
</script>

<style lang="less" scoped></style>
