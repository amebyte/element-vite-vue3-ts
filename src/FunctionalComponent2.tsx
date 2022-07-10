import { getCurrentInstance } from "vue";
import { useState, useReducer, useEffect, useLayoutEffect } from "./Hooks2";

// Vue3 中函数式组件只能用函数式声明
const FunctionalComponent2 = (props: any, context: any) => {
  console.log("getCurrentInstance2()", getCurrentInstance());
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useReducer((x: any) => x + 1, 1);
  const [count3, setCount3] = useReducer((x: any) => x + 1, 2);

  useEffect(() => {
    console.log("useEffect", count2);
  }, [count2]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect", count2);
  }, [count2]);

  return (
    <>
      <button onClick={() => setCount1(2)} {...props}>
        count1:{count1}
      </button>
      <button onClick={() => setCount2()} {...props}>
        count2:{count2}
      </button>
      <button onClick={() => setCount3()} {...props}>
        count3:{count3}
      </button>
    </>
  );
};

FunctionalComponent2.props = ["level"];
export default FunctionalComponent2;
