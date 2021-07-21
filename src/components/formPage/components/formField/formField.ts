import { Templator } from '../../../../utils/templator'
import { template as formFieldTemplate } from './formField.tmpl'
import './formField.less'
import { get } from '../../../../utils/get'

const template = new Templator(formFieldTemplate)

type Context = {
  name: string
  value: string
  typeInput?: string
}

export function FormField (ctx: Context) {
  return template.compile({
    ...ctx,
    typeInput: get(ctx, 'typeInput', 'text')
  })
}
