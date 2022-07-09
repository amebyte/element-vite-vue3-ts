import { useReducer, useEffect, useLayoutEffect } from "vue-hooks-api";

// Vue3 中函数式组件只能用函数式声明
const FunctionalComponent = (props: any, context: any) => {
  const [count1, setCount1] = useReducer((x: any) => x + 1, 0);
  const [count2, setCount2] = useReducer((x: any) => x + 1, 1);

  useEffect(() => {
    console.log("useEffect", count2);
  }, [count2]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect", count2);
  }, [count2]);

  return (
    <>
      <button onClick={() => setCount1()} {...props}>
        count1:{count1}
      </button>
      <button onClick={() => setCount2()} {...props}>
        count2:{count2}
      </button>
    </>
  );
};

FunctionalComponent.props = ["level"];
export default FunctionalComponent;
