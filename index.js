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

