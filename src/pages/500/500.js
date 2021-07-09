import { errorPage } from "../../components/errorPage"

export function error500 () {
  return errorPage({
    title: '500',
    subtitle: 'Мы уже фиксим'
  })
}
