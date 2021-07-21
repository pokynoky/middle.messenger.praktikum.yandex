import { EventBus } from './eventBus'

type Meta = {
  tagName: string,
  props: object
}

enum EVENTS {
  INIT = 'init',
  FLOW_CDM = 'flow:component-did-mount',
  FLOW_CDU = 'flow:component-did-update',
  FLOW_RENDER = 'flow:render'
}

export abstract class Block {

  private _element: HTMLElement = null;
  private _eventBus: Function

  readonly _meta: Meta = null;

  public props: object

  constructor(tagName: string = "div", props: object = {}) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props
    };

    this.props = this._makePropsProxy(props);

    this._eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus): void {
    eventBus.on(EVENTS.INIT, this.init.bind(this));
    eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources(): void {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init(): void {
    this._createResources();
    this._eventBus().emit(EVENTS.FLOW_CDM)
  }

  _componentDidMount(): void {
    this.componentDidMount();
    this._eventBus().emit(EVENTS.FLOW_RENDER);
  }

  componentDidMount(): void {}

  _componentDidUpdate(oldProps: object, newProps: object): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this._eventBus().emit(EVENTS.FLOW_RENDER)
    }
  }

  componentDidUpdate(oldProps?: object, newProps?: object): boolean {
    return oldProps !== newProps
  }

  setProps = (nextProps: object): void => {
    if (!nextProps) {
      return
    }

    Object.assign(this.props, nextProps)
    this._eventBus().emit(EVENTS.FLOW_CDU)
  };

  get element(): HTMLElement {
    return this._element;
  }

  _render(): void {
    const block = this.render();
    this._element.innerHTML = block;
  }

  abstract render(): string

  getContent(): HTMLElement {
    this._eventBus().emit(EVENTS.FLOW_RENDER)
    return this.element;
  }

  _makePropsProxy(props: object): object  {
    const proxyProps = new Proxy(props, {
      deleteProperty() {
        throw new Error('нет доступа')
      }
    })

    return proxyProps;
  }

  _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  show(): void {
    this.getContent().style.display = 'block'
  }

  hide(): void {
    this.getContent().style.display = 'none'
  }
}