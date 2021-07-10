import { Templator } from '../../../../utils/templator'
import { template as formFieldTemplate } from './formField.tmpl'
import './formField.less'
import { get } from '../../../../utils/get'

const template = new Templator(formFieldTemplate())

export function FormField (ctx) {
  return template.compile({
    ...ctx,
    typeInput: get(ctx, 'typeInput', 'text')
  })
}
