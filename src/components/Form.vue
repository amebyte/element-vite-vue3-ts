<template>
  <form>
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { PropType, provide } from "@vue/runtime-core";
import { Rules } from "async-validator";
import { ref } from "vue";
import { emitter } from "../composables/useEmitter";
import { FormItem, key } from "./types";

// 定义属性
const props = defineProps({
  model: { type: Object, required: true },
  rules: { type: Object as PropType<Rules> },
});

// 提供后代model和rules
provide(key, {
  model: props.model,
  rules: props.rules,
});

// 监听Item注册事件
const items = ref<FormItem[]>([]);
emitter.on("addFormItem", (item) => items.value.push(item));

// 定义输出
// 全局校验函数
function validate(cb: (isValid: boolean) => void) {
  // 循环执行内部所有FormItem校验方法
  const tasks = items.value.map((item) => item.validate());
  // 全部通过则校验通过
  Promise.all(tasks)
    .then(() => cb(true))
    .catch(() => cb(false));
}

defineExpose({
  validate,
});
</script>
