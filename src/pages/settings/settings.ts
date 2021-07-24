import { Templator } from '../../utils/templator'
import { template as settingsTemplate } from './settings.tmpl'
import './settings.less'
import { SettingsField } from './components/settingsField'
import { Button } from '../../components/button'
import Block from '../../utils/block'

import {
  fieldsSettings,
  buttonsFooter
} from './const'

const fields = fieldsSettings
  .map(item => new SettingsField(item).render())
  .join('')

const buttonsGroup = buttonsFooter
  .map(() => new SettingsField({
      name: 'qwe'
    }).render()
  )
  .join('')

export class Settings extends Block {
  constructor() {
    super()
  }

  render() {
    console.log('')
    const saveButton = new Button({
      children: 'Сохранить',
      type: 'primary'
    }).render()

    const template = new Templator(settingsTemplate)

    return template.compile({
      user: {
        name: 'Иван'
      },
      fields,
      buttonsGroup,
      saveButton
    })
  }
}
