import { Templator } from '../../../../utils/templator'
import { template as chatPreviewTemplator } from './chatPreview.tmpl'
import './chatPreview.less'

const template = new Templator(chatPreviewTemplator)

type Chat = {
  title: string
  date: string
  lastMessage?: string
  countMessages?: number
}

type Context = {
  chat: Chat
}

export function ChatPreview (ctx: Context) {
  return template.compile(ctx)
}
