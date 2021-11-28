<template>
    <div>
        <!-- label -->
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <!-- 校验信息 -->
        <p v-if="error">{{error}}</p>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    interface Props {
        label?: string,
        prop?: string
    }
    withDefaults(defineProps<Props>(), { label: '', prop: ''})
    // 错误信息
    const error = ref('')
</script>

<style>
</style>