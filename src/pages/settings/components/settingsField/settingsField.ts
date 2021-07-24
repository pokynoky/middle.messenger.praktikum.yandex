import { Templator } from '../../../../utils/templator'
import { template as settingsFieldTemplate } from './settingsField.tmpl'
import './settingsField.less'
import Block from '../../../../utils/block'

type SettingsFieldProps = {
  name: string
  value?: string
}

export class SettingsField extends Block {
  constructor(props: SettingsFieldProps) {
    super(props)
  }

  render() {
    const template = new Templator(settingsFieldTemplate)
    return template.compile({
      ...this.props,
      value: this.props.value || ''
    })
  }
}
