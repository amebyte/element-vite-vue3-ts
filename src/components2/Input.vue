<template>
  <div>
    <input :value="modelValue" @input="onInput" />
  </div>
</template>
<script setup lang="ts">
import { emitter } from "../composables/useEmitter2";

defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits<{
  (e: "update:model-value", value: string): void;
}>();

function onInput(e: Event) {
  const inp = e.target as HTMLInputElement;
  emit("update:model-value", inp.value);
  emitter.emit("validate");
}
</script>
