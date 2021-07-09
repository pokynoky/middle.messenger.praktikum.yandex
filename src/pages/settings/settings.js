import { Templator } from '../../utils/templator'
import { template as settingsTemplate } from './settings.tmpl'
import './settings.less'
import { settingsField } from './components/settingsField'
import { button } from '../../components/button'

import {
  fieldsSettings,
  buttonsFooter
} from './const'

const fields = fieldsSettings
  .map(item => settingsField(item))
  .join('')

const buttonsGroup = buttonsFooter
  .map(item => {
    return settingsField({
      name: button(item)
    })
  })
  .join('')

const template = new Templator(settingsTemplate())

function settings () {
  return template.compile({
    user: {
      name: 'Иван'
    },
    fields,
    buttonsGroup,
    saveButton: button({
      children: 'Сохранить',
      type: 'primary'
    })
  })
}

document.querySelector('#root').innerHTML = settings()
