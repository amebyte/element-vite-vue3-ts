<template>
  <Form :model="model">
    <FormItem label="用户名" prop="username">
      <Input v-model="model.username"></Input>
      <!-- <Input :model-value="" @update:modelValue=""></Input> -->
    </FormItem>
  </Form>
  <p>{{ model }}</p>
</template>

<script setup lang="ts">
import { reactive } from "@vue/reactivity";
import Form from "./components2/Form.vue";
import FormItem from "./components2/FormItem.vue";
import Input from "./components2/Input.vue";
const model = reactive({
  username: "coboy",
});
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
