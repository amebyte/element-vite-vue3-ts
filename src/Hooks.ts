import { getCurrentInstance, nextTick } from "vue";

const HookLayout = /*    */ 0b010;
const HookPassive = /*   */ 0b100;

let currentlyRenderingFiber: any = null;
let workInProgressHook: any = null;
let currentHook: any = null;

export function renderHooks(wip: any) {
  currentlyRenderingFiber = wip;
  currentlyRenderingFiber.memorizedState = null;
  currentlyRenderingFiber.updateQueueOfEffect = [];
  currentlyRenderingFiber.updateQueueOfLayoutEffect = [];
  workInProgressHook = null;
}

function updateWorkInProgressHook() {
  const current = currentlyRenderingFiber.alternate;
  let hook;
  if (current) {
    // 组件更新，在老hook的基础上更新
    currentlyRenderingFiber.memorizedState = current.memorizedState;
    if (workInProgressHook) {
      // not head
      hook = workInProgressHook = workInProgressHook.next;
      currentHook = currentHook.next;
    } else {
      // head hook
      hook = workInProgressHook = current.memorizedState;
      currentHook = current.memorizedState;
    }
  } else {
    // 初始渲染
    currentHook = null;
    hook = {
      memorizedState: null,
      next: null,
    };

    if (workInProgressHook) {
      // not head
      workInProgressHook = workInProgressHook.next = hook;
    } else {
      // head hook
      workInProgressHook = currentlyRenderingFiber.memorizedState = hook;
    }
  }

  return hook;
}

export function useReducer(reducer: any, initalState: any) {
  if (!currentlyRenderingFiber) renderHooks(getCurrentInstance());
  const hook = updateWorkInProgressHook();

  if (!currentlyRenderingFiber.alternate) {
    hook.memorizedState = initalState;
  }
  const dispatch = (action: any) => {
    hook.memorizedState = reducer(hook.memorizedState, action);
    console.log(
      "hook.memorizedState",
      hook.memorizedState,
      currentlyRenderingFiber
    );
    nextTick(() => {
      currentlyRenderingFiber.update();
    });
  };

  return [hook, dispatch];
}

function updateEffectImp(hookFlags: any, create: any, deps: any) {
  const hook = updateWorkInProgressHook();
  if (currentHook) {
    // 检查 deps 是否变化
    const prevEffect = currentHook.memorizedState;
    if (deps) {
      const prevDeps = prevEffect.deps;
      if (areHookInputsEqual(deps, prevDeps)) {
        return;
      }
    }
  }
  const effect = { hookFlags, create, deps };
  hook.memorizedState = effect;

  if (hookFlags & HookPassive) {
    currentlyRenderingFiber.updateQueueOfEffect.push(effect);
  } else if (hookFlags & HookLayout) {
    currentlyRenderingFiber.updateQueueOfLayoutEffect.push(effect);
  }
}

export function useEffect(create: any, deps: any) {
  return updateEffectImp(HookPassive, create, deps);
}

export function useLayoutEffect(create: any, deps: any) {
  return updateEffectImp(HookLayout, create, deps);
}

export function areHookInputsEqual(nextDeps: any, prevDeps: any) {
  if (prevDeps === null) {
    return false;
  }

  for (let i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    if (Object.is(nextDeps[i], prevDeps[i])) {
      continue;
    }
    return false;
  }
  return true;
}
