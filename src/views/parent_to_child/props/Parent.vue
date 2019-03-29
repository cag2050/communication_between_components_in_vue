<template>
    <div>
        <child :prop_str="str1"></child>
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
            str1: "str from parent"
        };
    }
};
</script>

<style lang="less" scoped></style>
