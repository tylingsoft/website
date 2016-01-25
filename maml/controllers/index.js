var mdi = require('markdown-it')();


function index(page) {
  page.html = mdi.render(page.markdown);
  page.generate();
}


module.exports = {
  index: index,
};
