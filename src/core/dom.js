class Dom {
  constructor(selector) {
    this.$el =
      typeof selector === 'string' ? document.querySelector(selector) : selector
  }

  clear() {
    return this.html('')
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      // this.$el.insertAdjacentHTML('afterbegin', html)
      return this
    }

    return this.$el.outerHTML.trim()
  }

  append(element) {
    if (element instanceof Dom) {
      element = element.$el
    }

    if (Element.prototype.append) {
      this.$el.append(element)
    } else {
      this.$el.appendChild(element)
    }
    return this
  }
}

export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }
  return $(el)
}
