import { Templator } from '../../utils/templator'
import { template as formPageTemplate } from './formPage.tmpl'
import './formPage.less'
import { button } from '../button'
import { formField } from './components/formField'

const template = new Templator(formPageTemplate())

export function formPage ({
  title,
  formFields,
  submitText,
  link,
  linkText
}) {
  const fields = formFields
    .map(item => formField(item))
    .join('')

  return template.compile({
    title,
    formFields: fields,
    submitButton: button({
      type: 'primary',
      children: submitText
    }),
    link,
    linkButton: button({
      type: 'link',
      children: linkText
    })
  })
}
