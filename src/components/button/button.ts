import { Templator } from '../../utils/templator'
import Block from '../../utils/block'
import { template as buttonTemplate } from './button.tmpl'
import './button.less'
import BlockProps from '../../utils/types/blockTypes'

type ButtonProps = BlockProps & {
  type: string
  children: string
  danger?: boolean
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super(props)
  }

  render() {
    const template = new Templator(buttonTemplate)
    return template.compile(this.props)
  }
}
