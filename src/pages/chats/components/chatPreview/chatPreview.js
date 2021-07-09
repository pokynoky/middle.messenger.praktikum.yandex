import { Templator } from '../../../../utils/templator'
import { template as chatPreviewTemplator } from './chatPreview.tmpl'
import './chatPreview.less'

const template = new Templator(chatPreviewTemplator())

export function chatPreview (ctx) {
  return template.compile(ctx)
}
