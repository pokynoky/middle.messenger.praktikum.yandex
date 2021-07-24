import { Templator } from '../../utils/templator'
import { template as chatsTemplate } from './chats.tmpl'
import './chats.less'
import Block from '../../utils/block'

import { ChatPreview } from './components/chatPreview'
import { Chat } from './components/chat'

const chatList = ['', '', '']
  .map(() => new ChatPreview({
    chat: {
      title: 'lorem ipsum',
      date: '15:32',
      lastMessage: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      countMessages: 5
    }
  }).render())
  .join('')

  
export class Chats extends Block {
  constructor() {
    super()
  }

  render() {
    const template = new Templator(chatsTemplate)
    return template.compile({
      chatList,
      chat: new Chat().render()
    })
  }
}

