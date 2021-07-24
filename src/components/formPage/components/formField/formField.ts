import { Templator } from '../../../../utils/templator'
import { template as formFieldTemplate } from './formField.tmpl'
import './formField.less'
import { get } from '../../../../utils/get'
import Block from '../../../../utils/block'

type FormFieldProps = {
  name: string
  value: string
  typeInput?: string
}

export class FormField extends Block {
  constructor(props: FormFieldProps) {
    super(props)
  }

  render() {
    const template = new Templator(formFieldTemplate)

    return template.compile({
      ...this.props,
      typeInput: get(this.props, 'typeInput', 'text')
    })
  }
}
