import { authorization } from './pages/authorization'
import { chats } from './pages/chats'
import { settings } from './pages/settings'
import { registration } from './pages/registration'
import { error404 } from './pages/404'
import { error500 } from './pages/500'
import './index.less'

const routers = [
  {
    path: '/',
    component: chats
  },
  {
    path: '/authorization',
    component: authorization
  },
  {
    path: '/settings',
    component: settings
  },
  {
    path: '/registration',
    component: registration
  },
  {
    path: '/500',
    component: error500
  }
]

const rout = routers.find(item => (
  item.path === window.location.pathname
))

const root = document.querySelector('#root');
root.innerHTML = rout
  ? rout.component()
  : error404();
