import { getCurrentInstance } from "vue";
import {
  useState,
  useReducer,
  useEffect,
  useLayoutEffect,
} from "vue-hooks-api";

const FunctionalComponent = (props: any, context: any) => {
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

export default FunctionalComponent;
