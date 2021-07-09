import { Templator } from '../../utils/templator'
import { template as chatsTemplate } from './chats.tmpl'
import './chats.less'

import { chatPreview } from './components/chatPreview'
import { chat } from './components/chat'

// import searchIcon from '../../../static/searchIcon.svg'

const chatList = ['', '', '']
  .map(() => (chatPreview({
    chat: {
      title: 'lorem ipsum',
      date: '15:32',
      lastMessage: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      countMessages: 5
    }
  })))
  .join('')

const template = new Templator(chatsTemplate())

export function chats () {
  return template.compile({
    // iconSearch: searchIcon
    chatList: chatList,
    chat: chat()
  })
}
