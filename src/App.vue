<template>
  <From :model="model">
    <FormItem label="用户名" prop="username">formItem</FormItem>
  </From>
</template>

<script setup lang="ts">
import { reactive } from "@vue/reactivity";
import From from './components/Form.vue'
import FormItem from './components/FormItem.vue'

const model = reactive({
    username: 'coboy'
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
