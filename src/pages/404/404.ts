import { ErrorPage } from '../../components/errorPage'

export function error404 () {
  return ErrorPage({
    title: '404',
    subtitle: 'Не туда попали'
  })
}
