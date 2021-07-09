import { errorPage } from "../../components/errorPage"

function error404 () {
  return errorPage({
    title: '404',
    subtitle: 'Не туда попали'
  })
}

document.querySelector('#root').innerHTML = error404()
