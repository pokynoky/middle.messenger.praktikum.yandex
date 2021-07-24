import { Templator } from '../../utils/templator'
import { template as errorPageTemplate } from './errorPage.tmpl'
import './errorPage.less'
import { Button } from '../button'
import Block from '../../utils/block'

type ErrorPageProps = {
  title: string
  subtitle: string
}

export class ErrorPage extends Block {
  constructor(props: ErrorPageProps) {
    super(props)
  }

  render() {
    const template = new Templator(errorPageTemplate)

    const button = new Button({
      children: 'Назад к чатам',
      type: 'link'
    }).render()

    return template.compile({
      ...this.props,
      button
    })
  }
}
