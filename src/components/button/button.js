import { Templator } from '../../utils/templator'
import { template as buttonTemplate } from './button.tmpl'
import './button.less'

const template = new Templator(buttonTemplate())

export function button ({
  type,
  children = '',
  danger
}) {
  return template.compile({
    type,
    children,
    danger: danger ? 'danger' : ''
  })
}
