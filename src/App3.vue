<template>
  <FunctionalComponent level="攻城师"></FunctionalComponent>
  <br />
  <span>{{ state.name }}</span>
  <span>{{ count }}</span>
  <cobyte></cobyte>
  <br />
  <FunctionalComponent2 level="攻城师"></FunctionalComponent2>
</template>

<script setup lang="ts">
import { reactive } from "@vue/reactivity";
import { ref, getCurrentInstance, watchEffect, onUpdated } from "vue";
import FunctionalComponent from "./FunctionalComponent";
import FunctionalComponent2 from "./FunctionalComponent2";
const state = reactive({
  name: "cobyte",
});
const count = ref(1);
</script>

<style scoped lang="scss">
$link-color: red;
a {
  color: $link-color;
}
::placeholder {
  color: $link-color;
}
</style>
