<template>
  <div>
    <input :value="modelValue" @input="onInput" />
  </div>
</template>
<script setup lang="ts">
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
}
</script>
