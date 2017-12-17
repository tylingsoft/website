var mdi = require('markdown-it')({ html: true, xhtmlOut: true })

function index (page) {
  page.html = mdi.render(page.markdown)
  page.generate()
}

module.exports = {
  index: index
}
