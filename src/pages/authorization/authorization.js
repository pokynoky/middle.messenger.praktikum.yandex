import { formPage } from '../../components/formPage'

const formFields = [
  {
    name: 'Логин',
    value: 'ivanivanov'
  },
  {
    name: 'Пароль',
    typeInput: 'password',
    value: 'пароль'
  }
]

export function authorization () {
  return formPage({
    title: 'Вход',
    formFields,
    submitText: 'Авторизоваться',
    link: '/registration',
    linkText: 'Нет аккаунта?'
  })
}
