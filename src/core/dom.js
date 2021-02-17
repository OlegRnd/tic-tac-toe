class Dom {
  constructor(selector) {
    this.$el =
      typeof selector === 'string' ? document.querySelector(selector) : selector
  }
}

export function $(selector) {
  return new Dom(selector)
}
