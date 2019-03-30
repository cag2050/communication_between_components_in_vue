<template>
    <div>
        <div>
            <slot></slot>
        </div>
        <div>
            <slot name="content"></slot>
        </div>
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
    },
    methods: {}
};
</script>

<style lang="less" scoped></style>
