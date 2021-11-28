<template>
    <form>
        <slot></slot>
    </form>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core';
import { Rules } from 'async-validator'

// 定义属性
defineProps({
    model: { type: Object, required: true },
    rules: { type: Object as PropType<Rules> },
})

// 定义输出

function validate() {

}

defineExpose({
    validate
})
</script>