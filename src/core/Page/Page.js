export class Page {
  constructor(delay = 1000) {
    this.delay = delay
    this.template = ''
    this.name = ''
  }

  render() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(this.getRoot())
      }, this.delay)
    })
  }

  getRoot() {
    throw new Error('Method "getRoot" should be implemented')
  }

  afterrender() {}
  destroy() {}
}
