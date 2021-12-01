<template>
  <Form ref="loginForm" :model="model" :rules="rules">
    <FormItem label="用户名" prop="username">
      <Input v-model="model.username"></Input>
      <!-- <Input :model-value="" @update:modelValue=""></Input> -->
    </FormItem>
    <FormItem><button @click.prevent="onLogin">登录</button></FormItem>
  </Form>
  <p>{{ model }}</p>
</template>

<script setup lang="ts">
import { reactive } from "@vue/reactivity";
import { ref } from "vue";
import Form from "./components2/Form.vue";
import FormItem from "./components2/FormItem.vue";
import Input from "./components2/Input.vue";
import { FormType } from "./components2/types";
const model = reactive({
  username: "coboy",
});
const rules = reactive({
  username: [
    {
      required: true,
      message: "用户名为必填项",
    },
  ],
});
const loginForm = ref<FormType>();
function onLogin() {
  loginForm.value?.validate((isValid) => {
    console.log("isValid", isValid);
  });
}
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
