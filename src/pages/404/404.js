import { errorPage } from "../../components/errorPage"

export function error404 () {
  return errorPage({
    title: '404',
    subtitle: 'Не туда попали'
  })
}
