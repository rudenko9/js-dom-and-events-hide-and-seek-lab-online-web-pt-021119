const getFirstSelector = function (selector) {
  return document.querySelector(selector);
}

const nestedTarget = function() {
  return document.querySelector('#nested .target')
}


const deepestChild = function() {
  let node = document.querySelector('#grand-node');
  while (node.querySelector('div')) {
    node = node.querySelector('div')
  }
  return node;
}

const increaseRankBy = function(n) {
  const list = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < list.length; i++) {
    let children = list[i].children;
    for (let j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}