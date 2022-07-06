<template>
  <Form ref="loginForm" :model="model" :rules="rules">
    <FormItem label="用户名" prop="username">
      <Input v-model="model.username"></Input>
      <!-- <Input :model-value="" @update:modelValue=""></Input> -->
    </FormItem>
    <FormItem><button @click.prevent="onLogin">登录</button></FormItem>
  </Form>
  <p @click="() => setCount1()">{{ count1.memorizedState }}=={{ model }}</p>
</template>

<script setup lang="ts">
import { reactive } from "@vue/reactivity";
import { ref, getCurrentInstance, watchEffect, onUpdated } from "vue";
import Form from "./components2/Form.vue";
import FormItem from "./components2/FormItem.vue";
import Input from "./components2/Input.vue";
import { FormType } from "./components2/types";
import { useReducer } from "./Hooks";
// const { proxy } = getCurrentInstance() as any;
// console.log("ctx", proxy, proxy.$test);

const [count1, setCount1] = useReducer((x) => x + 1, 0);
onUpdated(() => console.log("onUpdate", count1));
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
watchEffect(() => {
  const s = model.username;
  setInterval(() => {
    model.username = "cccc";
  }, 1000);

  console.log("变化了");
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
