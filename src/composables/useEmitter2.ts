import mitt from "mitt";
import { FormItem } from "../components2/types";
export type Events = {
  validate: undefined;
  addFormItem: FormItem;
};
export const emitter = mitt<Events>();
