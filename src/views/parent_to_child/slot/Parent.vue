<template>
    <div>
        <child>
            <template v-slot:default>
                名字为 default 的 slot 的内容（默认插槽）
            </template>
            <!-- # 是 v-slot: 的缩写 -->
            <template #content>
                名字为 content 的 slot 的内容
            </template>
        </child>
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
    methods: {}
};
</script>

<style lang="less" scoped></style>
