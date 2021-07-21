import { Templator } from '../../utils/templator'
import { template as errorPageTemplate } from './errorPage.tmpl'
import './errorPage.less'
import { Button } from '../button'

const template = new Templator(errorPageTemplate)

type Context = {
  title: string
  subtitle: string
}

export function ErrorPage (ctx: Context) {
  return template.compile({
    ...ctx,
    button: Button({
      children: 'Назад к чатам',
      type: 'link'
    })
  })
}
