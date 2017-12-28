const mdc = require('markdown-core')

function index (page) {
  page.html = mdc.render(page.markdown)
  page.build()
}

module.exports = {
  index: index
}
