import { Templator } from '../../../../utils/templator'
import { template as chatTemplator } from './chat.tmpl'
import './chat.less'
import Block from '../../../../utils/block'


export class Chat extends Block {
  constructor() {
    super()
  }
  
  render() {
    const template = new Templator(chatTemplator)
    return template.compile()
  }
}
