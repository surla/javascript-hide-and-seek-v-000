function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  var children = document.querySelectorAll('#grand-node div');
  return children[children.length - 1];
}

function increaseRankBy(n) {
  document.querySelectorAll('ul.ranked-list li').forEach(item => {
    const increasedItem = parseInt(item.innerHTML) + n
    item.innerHTML = increasedItem
  })
}
