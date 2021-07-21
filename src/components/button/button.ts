import { Templator } from '../../utils/templator'
import { template as buttonTemplate } from './button.tmpl'
import './button.less'

const template = new Templator(buttonTemplate)

type Button = {
  type: string
  children: string
  danger?: boolean
}

export function Button ({
  type,
  children = '',
  danger
}: Button): string {
  return template.compile({
    type,
    children,
    danger: danger ? 'button_danger' : ''
  })
}
