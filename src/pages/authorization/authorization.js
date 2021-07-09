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

function authorization () {
  return formPage({
    title: 'Вход',
    formFields,
    submitText: 'Авторизоваться',
    link: '/registration.html',
    linkText: 'Нет аккаунта?'
  })
}

document.querySelector('#root').innerHTML = authorization()
