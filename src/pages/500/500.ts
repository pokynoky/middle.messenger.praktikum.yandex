import { ErrorPage } from '../../components/errorPage'

export function error500 () {
  return ErrorPage({
    title: '500',
    subtitle: 'Мы уже фиксим'
  })
}
