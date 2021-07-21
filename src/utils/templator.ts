import { get } from './get'

export class Templator {
  private _template: string

  constructor(template: string) {
    this._template = template
  }

  compile(ctx?: object) {
    return this._compileTemplate(ctx)
  }

  _compileTemplate(ctx?: object): string {
    // let tmpl: string = this._template
    let tmpl = this._template
    // let key: RegExpExecArray | null = null
    let key = null
    const regExp = /\{\{(.*?)\}\}/gi

    // const regExp = /\<(.*?) ?\/\>/gi

    while ((key = regExp.exec(tmpl))) {
      if (key[1]) {
        const tmplValue = key[1].trim()
        const data = get(ctx, tmplValue)

        // if (typeof data === "function") {
        //   window[tmplValue] = data
        //   tmpl = tmpl.replace(
        //     new RegExp(key[0], "gi"),
        //     `window.${key[1].trim()}()`
        //   )
        //   continue
        // }

        if (typeof data === 'string') {
          tmpl = tmpl.replace(new RegExp(key[0], "gi"), data)
        }
      }
    }
  
    return tmpl
  }
}
