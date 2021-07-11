import { get } from './get'

export class Templator {
  constructor(template) {
    this._template = template;
  }

  compile(ctx) {
    return this._compileTemplate(ctx);
  }

  _compileTemplate(ctx) {
    let tmpl = this._template;
    let key = null;
    const regExp = /\{\{(.*?)\}\}/gi;

    while ((key = regExp.exec(tmpl))) {
      if (key[1]) {
        const tmplValue = key[1].trim();
        const data = get(ctx, tmplValue);

        if (typeof data === "function") {
          window[tmplValue] = data;
          tmpl = tmpl.replace(
            new RegExp(key[0], "gi"),
            `window.${key[1].trim()}()`
          );
          continue;
        }

        tmpl = tmpl.replace(new RegExp(key[0], "gi"), data);
      }
    }
  
    return tmpl;
  }
};
