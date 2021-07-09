import { errorPage } from "../../components/errorPage"

function error500 () {
  return errorPage({
    title: '500',
    subtitle: 'Мы уже фиксим'
  })
}

document.querySelector('#root').innerHTML = error500()
