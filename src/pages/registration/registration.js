import { formPage } from '../../components/formPage'

const formFields = [
  {
    name: 'Почта',
    value: 'pochta@yandex.ru'
  },
  {
    name: 'Логин',
    typeInput: 'password',
    value: 'ivanivanov'
  },
  {
    name: 'Имя',
    value: 'Иван'
  },
  {
    name: 'Фамилия',
    value: 'Иванов'
  },
  {
    name: 'Телефон',
    value: '+7 (909) 967 30 30'
  },
  {
    name: 'Пароль',
    typeInput: 'password',
    value: 'пароль'
  },
  {
    name: 'Пароль (ещё раз)',
    typeInput: 'password',
    value: 'пароль'
  }
]

export function registration () {
  return formPage({
    title: 'Регистрация',
    formFields,
    submitText: 'Зарегистрироваться',
    link: '/',
    linkText: 'Войти'
  })
}
