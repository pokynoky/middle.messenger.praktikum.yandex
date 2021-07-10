import { Templator } from '../../utils/templator'
import { template as settingsTemplate } from './settings.tmpl'
import './settings.less'
import { SettingsField } from './components/settingsField'
import { Button } from '../../components/button'

import {
  fieldsSettings,
  buttonsFooter
} from './const'

const fields = fieldsSettings
  .map(item => SettingsField(item))
  .join('')

const buttonsGroup = buttonsFooter
  .map(item => {
    return SettingsField({
      name: Button(item)
    })
  })
  .join('')

const template = new Templator(settingsTemplate())

export function settings () {
  return template.compile({
    user: {
      name: 'Иван'
    },
    fields,
    buttonsGroup,
    saveButton: Button({
      children: 'Сохранить',
      type: 'primary'
    })
  })
}
