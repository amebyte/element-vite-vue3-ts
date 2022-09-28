<template>
  <From ref="loginForm" :model="model" :rules="rules">
    <FormItem label="用户名" prop="username">
      <Input v-model="model.username"></Input>
    </FormItem>
    <FormItem><button @click.prevent="onLogin">登录</button></FormItem>
  </From>
  <p>{{ model }}</p>
</template>

<script setup lang="ts">
import { reactive } from "@vue/reactivity";
import { ref } from "vue";
import From from "./components/Form.vue";
import FormItem from "./components/FormItem.vue";
import Input from "./components/Input.vue";
import { Form } from "./components/types";

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

// 获取表单实例
const loginForm = ref<Form>();

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
