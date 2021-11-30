<template>
  <form class="form">
    <slot></slot>
  </form>
</template>
<script setup lang="ts">
import { PropType } from "@vue/runtime-core";
import { Rules } from "async-validator";

defineProps({
  model: { type: Object, required: true },
  rules: { type: Object as PropType<Rules> },
});

function validate() {
  console.log("validate");
}

defineExpose({
  validate,
});
</script>
