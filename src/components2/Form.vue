<template>
  <form class="form">
    <slot></slot>
  </form>
</template>
<script setup lang="ts">
import { PropType, provide } from "@vue/runtime-core";
import { Rules } from "async-validator";
import { ref } from "vue";
import { emitter } from "../composables/useEmitter2";
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
  console.log("addFormItem");
  items.value.push(item);
});

function validate(cb: (isValid: boolean) => void) {
  console.log("validate", items.value);
  const tasks = items.value.map((item) => item.validate());
  console.log("tasks", tasks);
  Promise.all(tasks)
    .then(() => {
      cb(true);
      console.log("aaa");
    })
    .catch(() => {
      cb(false);
      console.log("bbbb");
    });
}

defineExpose({
  validate,
});
</script>
