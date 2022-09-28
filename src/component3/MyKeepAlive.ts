export const MyKeepAlive = {
  // name: `my-keep-alive`,
  name: "MyKeepAlive",
  __isKeepAlive: true,

  setup(props: any, setupContext: any) {
    const { slots } = setupContext;

    console.log(
      "%c [  ]-29",
      "font-size:13px; background:pink; color:#bf2c9f;",
      slots.default
    );

    return () => {
      console.log(
        "%c [  ]-36",
        "font-size:13px; background:pink; color:#bf2c9f;"
      );
      return "omg";
    };
  },
};
// export const MyKeepAlive = MyKeepAliveImpl as any as {
//   __isKeepAlive: true;
//   new (): {
//     $props: VNodeProps & KeepAliveProps;
//   };
// };

// export const MyKeepAlive = defineCustomElement(MyKeepAliveImpl);

// customElements.define("my-keep-alive", MyKeepAlive);
