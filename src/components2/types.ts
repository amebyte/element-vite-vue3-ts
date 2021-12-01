import { InjectionKey } from "@vue/runtime-core";
import { Rules, Values } from "async-validator";

export type FormData = {
  model: Record<string, unknown>;
  rules?: Rules;
};

export type FormItem = {
  validate: () => Promise<Values>;
};

export type FormType = {
  validate: (cb: (isValid: boolean) => void) => void;
};

export const key: InjectionKey<FormData> = Symbol("form-data");
