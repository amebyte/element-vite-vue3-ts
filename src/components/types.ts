import { InjectionKey } from "@vue/runtime-core";
import { Rules } from "async-validator";

export type FormData = {
    model: Record<string, unknown>
    rules?: Rules
}

export const key: InjectionKey<FormData> = Symbol('form-data')