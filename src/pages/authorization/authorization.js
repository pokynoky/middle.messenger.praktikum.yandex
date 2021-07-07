import { Templator } from '../../utils/templator'
import { template as authorizationTemplate } from './authorization.tmpl'
import './authorization.less'

const template = new Templator(authorizationTemplate())

export function authorization () {
  return template.compile({
  })
}
