<template>
  <From :model="model" :rules="rules">
    <FormItem label="用户名" prop="username">
        <Input v-model="model.username"></Input>
    </FormItem>
  </From>
  <p>{{ model }}</p>
</template>

<script setup lang="ts">
import { reactive } from "@vue/reactivity";
import From from './components/Form.vue'
import FormItem from './components/FormItem.vue'
import Input from './components/Input.vue'

const model = reactive({
    username: 'coboy'
})

const rules = reactive({
    username: [{
        required: true, message: '用户名为必填项'
    }]
})
</script>

<style scoped lang="scss">
$link-color: red;
a {
  color: $link-color;
}
::placeholder {
  color: $link-color;
}
</style>
