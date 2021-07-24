import { Templator } from '../../utils/templator'
import { template as formPageTemplate } from './formPage.tmpl'
import './formPage.less'
import { Button } from '../button'
import { FormField } from './components/formField'
import Block from '../../utils/block'

export class FormPage extends Block {
  constructor(props: object) {
    super(props)
  }

  render() {
    const {
      title,
      link,
      submitText,
      linkText,
      formFields
    } = this.props

    const submitButton = new Button({
      type: 'primary',
      children: submitText
    }).render()

    const linkButton = new Button({
      type: 'link',
      children: linkText
    }).render()

    const template = new Templator(formPageTemplate)

    const fields = formFields
      .map(item => (new FormField(item).render()))
      .join('')

    return template.compile({
      title,
      formFields: fields,
      submitButton,
      link,
      linkButton
    })
  }
}
