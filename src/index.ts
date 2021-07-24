import { Settings } from './pages/settings'
import { registration } from './pages/registration'
import { Chats } from './pages/chats'
import { authorization } from './pages/authorization'
import { error500 } from './pages/500'
import { error404 } from './pages/404'
import './index.less'

const routes = [
  {
    path: '/',
    component: authorization()
  },
  {
    path: '/registration',
    component: registration()
  },
  {
    path: '/chats',
    component: new Chats()
  },
  {
    path: '/500',
    component: error500()
  },
  {
    path: '/settings',
    component: new Settings()
  }
]

const route = routes.find(item => (
  item.path === window.location.pathname
))

const root = document.querySelector('#root')
const component = route
  ? route.component.getContent()
  : error404().getContent()

root.appendChild(component)
