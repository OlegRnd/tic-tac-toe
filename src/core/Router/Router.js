export class Router {
  constructor(selector, pages = {}) {
    if (!selector) {
      throw new Error('Selector is required')
    }

    this.selector = selector
    this.pages = pages
    console.log(this.render())
  }

  render() {
    const keys = Object.keys(this.pages)
    let page
    let html = ''

    keys.forEach((key) => {
      page = new this.pages[key]()
      html += page.render()
    })

    return (html += 'Router')
  }
}
