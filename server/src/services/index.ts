import type { Template } from "../types.js";

export function getTemplate(
  objectId: string,
  mock: boolean = true,
): Promise<Template> {
  return new Promise((res, rej) => {
    if (mock) {
      res({
        id: "1",
        html: '<div class="text-slate-500 bg-red-500 font-bold	">Hello World</div>',
        styles: "",
      });
    } else {
      rej(new Error("DB Integration not complete"));
    }
  });
}
