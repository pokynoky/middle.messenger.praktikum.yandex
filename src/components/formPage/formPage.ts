import { Templator } from '../../utils/templator'
import { template as formPageTemplate } from './formPage.tmpl'
import './formPage.less'
import { Button } from '../button'
import { FormField } from './components/formField'

const template = new Templator(formPageTemplate)

type Fields = {
  name: string
  value: string
  typeInput?: string
}

type Form = {
  title: string
  formFields: Fields[]
  submitText: string
  link: string
  linkText: string
}

export function FormPage ({
  title,
  formFields,
  submitText,
  link,
  linkText
}: Form) {
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
