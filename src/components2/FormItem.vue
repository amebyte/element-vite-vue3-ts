<template>
  <div>
    <label v-if="label">{{ label }}：</label>
    <slot></slot>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import Schema from "async-validator";
import { onMounted, ref, inject } from "vue";
import { FormItem, key } from "./types";
import { emitter } from "../composables/useEmitter2";

interface Props {
  label?: string;
  prop?: string;
}
const props = withDefaults(defineProps<Props>(), { label: "", prop: "" });
// 错误
const error = ref("");

const formData = inject(key);

const o: FormItem = {
  validate,
};

defineExpose(o);

onMounted(() => {
  if (props.prop) {
    console.log("xxxaddFormItem", o);
    emitter.on("validate", () => {
      validate();
    });
    emitter.emit("addFormItem", o);
  }
});

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
      error.value = errors[0].message || "校验错误";
    } else {
      error.value = "";
    }
  });
}
</script>
