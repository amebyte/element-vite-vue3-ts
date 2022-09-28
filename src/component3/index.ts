import { getCurrentInstance } from "vue";
export const MyKeepAlive = {
  name: "MyKeepAlive",
  __isKeepAlive: true,
  setup(props: any, context: any) {
    const instance = getCurrentInstance();
    console.log("my-keep-alive", props.slots, instance?.slots, context.slots);
    if (context.slots) {
      return context.slots.default;
    }
    return () => {
      return "cobyte";
    };
  },
};
