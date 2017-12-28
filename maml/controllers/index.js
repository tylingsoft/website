const mdi = require('markdown-it')({ html: true, xhtmlOut: true })

function index (page) {
  page.html = mdi.render(page.markdown)
  page.build()
}

module.exports = {
  index: index
}
