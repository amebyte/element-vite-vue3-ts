<template>
  <div>
    <!-- label -->
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <!-- 校验信息 -->
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted, ref } from "vue";
import Schema from "async-validator";
import { emitter } from "../composables/useEmitter";
import { FormItem, key } from "./types";

interface Props {
  label?: string;
  prop?: string;
}
const props = withDefaults(defineProps<Props>(), { label: "", prop: "" });
// 错误信息
const error = ref("");

// 监听校验事件
const o: FormItem = {
  validate,
};

defineExpose(o);

// 监听校验事件
onMounted(() => {
  // prop存在才需要校验
  if (props.prop) {
    emitter.on("validate", () => {
      validate();
    });

    emitter.emit("addFormItem", o);
  }
});

// 监听校验
const formData = inject(key);

// 获取校验值和规则
function validate() {
  if (formData?.rules === undefined) {
    return Promise.resolve({ result: true });
  }

  // 获取值和规则
  const rules = formData.rules[props.prop];
  const value = formData.model[props.prop];

  const schema = new Schema({ [props.prop]: rules });
  return schema.validate({ [props.prop]: value }, (errors) => {
    if (errors) {
      // 校验失败
      error.value = errors[0].message || "校验错误";
    } else {
      error.value = "";
    }
  });
}
</script>

<style></style>
