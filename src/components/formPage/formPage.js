import { Templator } from '../../utils/templator'
import { template as formPageTemplate } from './formPage.tmpl'
import './formPage.less'
import { Button } from '../button'
import { FormField } from './components/formField'

const template = new Templator(formPageTemplate())

export function FormPage ({
  title,
  formFields,
  submitText,
  link,
  linkText
}) {
  const fields = formFields
    .map(item => FormField(item))
    .join('')

  return template.compile({
    title,
    formFields: fields,
    submitButton: Button({
      type: 'primary',
      children: submitText
    }),
    link,
    linkButton: Button({
      type: 'link',
      children: linkText
    })
  })
}
