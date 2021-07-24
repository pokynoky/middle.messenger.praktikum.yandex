import { ErrorPage } from '../../components/errorPage'

export function error500 () {
  return new ErrorPage({
    title: '500',
    subtitle: 'Мы уже фиксим'
  })
}
