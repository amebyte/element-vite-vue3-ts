<template>
  <form class="form">
    <slot></slot>
  </form>
</template>
<script setup lang="ts">
import { PropType, provide } from "@vue/runtime-core";
import { Rules } from "async-validator";
import { ref } from "vue";
import { emitter } from "../composables/useEmitter";
import { FormItem, key } from "./types";

const props = defineProps({
  model: { type: Object, required: true },
  rules: { type: Object as PropType<Rules> },
});

provide(key, {
  model: props.model,
  rules: props.rules,
});

const items = ref<FormItem[]>([]);

emitter.on("addFormItem", (item) => {
  items.value.push(item);
});

function validate(cb: (isValid: boolean) => void) {
  console.log("validate");
  const tasks = items.value.map((item) => item.validate());
  Promise.all(tasks)
    .then(() => cb(true))
    .catch(() => cb(false));
}

defineExpose({
  validate,
});
</script>
