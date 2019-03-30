<template>
    <div>
        <child :prop_string_required="string1"></child>
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
            string1: "string from parent"
        };
    }
};
</script>

<style lang="less" scoped></style>
