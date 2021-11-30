<template>
  <div>
    <label v-if="label">{{ label }}：</label>
    <slot></slot>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface Props {
  label?: string;
  props?: string;
}
withDefaults(defineProps<Props>(), { label: "", props: "" });
// 错误
const error = ref("");
</script>
