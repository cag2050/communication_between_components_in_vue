<template>
    <div>
        <child v-on:parent-register-event="parentRegisterEvent"></child>
        <div>子组件传来的随机数是：{{ this.randomValueFromChild }}</div>
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
            randomValueFromChild: ""
        };
    },
    methods: {
        parentRegisterEvent($event) {
            this.randomValueFromChild = $event;
        }
    }
};
</script>

<style lang="less" scoped></style>
