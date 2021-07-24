import { Templator } from '../../../../utils/templator'
import { template as chatPreviewTemplator } from './chatPreview.tmpl'
import './chatPreview.less'
import Block from '../../../../utils/block'
import BlockProps from '../../../../utils/types/blockTypes'

type Chat = {
  title: string
  date: string
  lastMessage?: string
  countMessages?: number
}

type Context = BlockProps & {
  chat: Chat
}

export class ChatPreview extends Block {
  constructor(props: Context) {
    super(props)
  }

  render() {
    const template = new Templator(chatPreviewTemplator)

    return template.compile(this.props)
  }
}
