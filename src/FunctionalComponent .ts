import { h, getCurrentInstance } from "vue";
import { useReducer, useEffect, useLayoutEffect } from "./Hooks";

// Vue3 中函数式组件只能用函数式声明
const FunctionalComponent = (props: any, context: any) => {
  console.log(context, getCurrentInstance());
  const [count1, setCount1] = useReducer((x: any) => x + 1, 0);
  //   const [count2, setCount2] = useReducer((x: any) => x + 1, 1);
  context.slots = `你好${props.level}, count1:${count1}`;

  return h(
    `div`,
    { onClick: () => setCount1(), ...context.attrs },
    context.slots
  );
};

FunctionalComponent.props = ["level"];
export default FunctionalComponent;
