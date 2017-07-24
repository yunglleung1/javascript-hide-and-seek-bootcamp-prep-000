
var selector
function getFirstSelector(selector) {
  return document.querySelector(`${selector}`)
}

function nestedTarget() {
  return document.getElementById('nested')
}

var n
function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
  }
}

function deepestChild() {
  const divs = document.querySelector('#grand-node').querySelectorAll('div')
  var selector = "#grand-node"
    for (var i = 0; i < divs.length; i++) {
      selector = selector + " div"
    }
    return document.querySelector(selector)
}
