<template>
    <div>
        <button @click="emitParentRegisterEvent">
            点击：子组件触发父组件注册的事件
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
        emitParentRegisterEvent() {
            let randomValue = parseInt(Math.random() * 100);
            this.$emit("parent-register-event", randomValue);
        }
    }
};
</script>

<style lang="less" scoped></style>
