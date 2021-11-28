<template>
  <From :model="model"></From>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script setup lang="ts">
import { reactive } from "@vue/reactivity";
import HelloWorld from "comps/HelloWorld.vue";
import From from './components/Form.vue'

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
