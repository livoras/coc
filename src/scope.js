import $ from "cheerio"

class Scope {
  constructor(key) {
    this.key = key
    this.$ = $.load("<div class='scope'></div>")
    this.$el = this.$("div.scope").eq(0)
    this.makeHeading()
  }
  makeHeading() {
    this.$el.prepend(`<div class="heading">${this.key}</div>`)
  }
  toStr() {
    return this.$.html()
  }
  append(scope) {
    this.$el.append(scope.$el)
  }
}

class ArrayScope extends Scope {
  constructor(key) {
    super(key)
    this.$ = $.load("<div class='array-scope'></div>")
    this.$el = this.$("div.array-scope").eq(0)
    this.makeHeading()
  }
}

export {Scope, ArrayScope}
