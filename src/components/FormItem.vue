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
    import { onMounted, ref } from 'vue';
import { emitter } from '../composables/useEmitter';

    interface Props {
        label?: string,
        prop?: string
    }
    withDefaults(defineProps<Props>(), { label: '', prop: ''})
    // 错误信息
    const error = ref('')

    // 监听校验事件
    onMounted(() => {
        // prop存在才需要校验
        emitter.on('validate', () => {
            validate()
        })
    })

    function validate() {
        console.log('validate')
    }

</script>

<style>
</style>