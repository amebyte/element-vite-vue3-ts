<template>
    <div>
        <input :value="modelValue" @input="onInput" />
    </div>
</template>

<script setup lang="ts">import { emitter } from '../composables/useEmitter'

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
        // 通知FormItem校验
        emitter.emit('validate')
    }
</script>