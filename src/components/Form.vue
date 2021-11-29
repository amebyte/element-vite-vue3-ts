<template>
    <form>
        <slot></slot>
    </form>
</template>

<script setup lang="ts">
import { PropType, provide } from '@vue/runtime-core';
import { Rules } from 'async-validator'
import { key } from './types';

// 定义属性
const props = defineProps({
    model: { type: Object, required: true },
    rules: { type: Object as PropType<Rules> },
})

// 提供后代model和rules
provide(key, {
    model: props.model,
    rules: props.rules
})

// 定义输出

function validate() {

}

defineExpose({
    validate
})
</script>