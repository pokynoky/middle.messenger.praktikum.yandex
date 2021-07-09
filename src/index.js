import { settings } from './pages/settings'
import { registration } from './pages/registration'
import { chats } from './pages/chats'
import { authorization } from './pages/authorization'
import { error500 } from './pages/500'
import { error404 } from './pages/404'
import './index.less'

const routes = [
  {
    path: '/',
    component: authorization
  },
  {
    path: '/registration',
    component: registration
  },
  {
    path: '/chats',
    component: chats
  },
  {
    path: '/error500',
    component: error500
  },
  {
    path: '/settings',
    component: settings
  },
]

console.log('document.location.pathname', window.location.pathname)
const rout = routes.find(item => (
  item.path === document.location.pathname
))

const root = document.querySelector('#root')
root.innerHTML = rout
  ? rout.component()
  : error404()
