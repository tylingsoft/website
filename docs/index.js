if (window.location.hostname.indexOf('localhost') === -1 && window.location.protocol !== 'https:') {
  window.location.protocol = 'https:'
}

var scrollToHash = () => {
  var hash = window.location.hash
  if (hash.length <= 0) {
    return
  }
  var element = document.getElementById(hash.substr(1))
  if (element === undefined || element === null) {
    return
  }
  window.scroll(0, element.offsetTop - 64)
}

setTimeout(() => { scrollToHash() }, 1000)

window.addEventListener('hashchange', () => {
  scrollToHash()
})
