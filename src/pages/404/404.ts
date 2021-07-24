import { ErrorPage } from '../../components/errorPage'

export function error404 () {
  return new ErrorPage({
    title: '404',
    subtitle: 'Не туда попали'
  })
}
