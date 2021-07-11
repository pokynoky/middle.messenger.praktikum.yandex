import { Templator } from '../../../../utils/templator'
import { template as settingsFieldTemplate } from './settingsField.tmpl'
import './settingsField.less'

const template = new Templator(settingsFieldTemplate)

export function SettingsField (ctx) {
  return template.compile({
    ...ctx,
    value: ctx.value || ''
  })
}
