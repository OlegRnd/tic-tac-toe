import {Loader} from '@/components/Loader.js'

import {$} from '@core/dom'

import {ActiveRoute} from '@core/Router/ActiveRoute'

export class Router {
  constructor(selector, pages = {}) {
    if (!selector) {
      throw new Error('Selector is required')
    }

    this.selector = $(selector)
    this.pages = pages
    this.changePage = this.changePage.bind(this)
    this.Page = null

    this.init()
  }

  init() {
    window.addEventListener('hashchange', this.changePage)
    this.changePage()
  }

  // обработчик события "изменение адреса в строке браузера"
  async changePage() {
    let route = ActiveRoute.param[0] || 'main'
    if (!this.pages[route]) {
      route = 'main'
    }
    if (this.Page) {
      this.Page.destroy()
    }

    this.loader = new Loader()
    this.selector.clear().append(this.loader)

    this.Page = new this.pages[route]()
    const html = await this.Page.render()
    // this.selector.clear().append(html)
    this.selector.html(html)
  }

  destroy() {
    window.removeEventListener('hashchange', this.changePage)
  }
}
