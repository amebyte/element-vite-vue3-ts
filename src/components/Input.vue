<template>
    <div>
        <input :value="modelValue" @input="onInput" />
    </div>
</template>

<script setup lang="ts">
    defineProps({
        modelValue: {
            type: String,
            default: ''
        }
    })

    // 输出事件
    const emit = defineEmits<{
        (e: "update:model-value", value: string):void
    }>()

    // emit('update:model-value', 'coboy')

    function onInput(e: Event) {
        const inp = e.target as HTMLInputElement
        emit("update:model-value", inp.value)
    }
</script>