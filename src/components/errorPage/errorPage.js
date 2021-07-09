import { Templator } from '../../utils/templator'
import { template as errorPageTemplate } from './errorPage.tmpl'
import './errorPage.less'
import { button } from '../button'

const template = new Templator(errorPageTemplate())

export function errorPage (ctx) {
  return template.compile({
    ...ctx,
    button: button({
      children: 'Назад к чатам',
      type: 'link'
    })
  })
}
