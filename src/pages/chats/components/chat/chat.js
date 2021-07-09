import { Templator } from '../../../../utils/templator'
import { template as chatTemplator } from './chat.tmpl'
import './chat.less'

const template = new Templator(chatTemplator())

export function chat (ctx) {
  return template.compile(ctx)
}
