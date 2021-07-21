import { Templator } from '../../../../utils/templator'
import { template as settingsFieldTemplate } from './settingsField.tmpl'
import './settingsField.less'

const template = new Templator(settingsFieldTemplate)

type Context = {
  name: string
  value?: string
}

export function SettingsField (ctx: Context) {
  return template.compile({
    ...ctx,
    value: ctx.value || ''
  })
}
