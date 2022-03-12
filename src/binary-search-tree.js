const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    this._root = insertElememnt(this._root, data);

    function insertElememnt(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (value === node.data) {
        return node;
      }

      if (value < node.data) {
        node.left = insertElememnt(node.left, value);
      } else {
        node.right = insertElememnt(node.right, value);
      }

      return node;
    }
  }

  has(data) {
    let currentNode = this._root;

    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      }

      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }

      if (!currentNode) {
        return false;
      }
    }

    return false
  }

  find(data) {
    return nodeSearch(this._root, data);

    function nodeSearch(node, value) {
      if (!node) return null;
      if (node.data === value) return node;
      if (node.data > data) {
        return nodeSearch(node.left, value);
      } else {
        return nodeSearch(node.right, value);
      }
    }
  }

  remove(data) {
    this._root = removeElement(this._root, data);

    function removeElement(node, value) {
      if (!node) {
        return null;
      }

      if (value === node.data) {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        if (node.left && node.right) {
          let substitute = node.right;

          while (substitute.left) {
            substitute = substitute.left;
          }

          node.data = substitute.data;
          node.right = removeElement(node.right, substitute.data);
          return node;
        }
      } else if (value < node.data) {
        node.left = removeElement(node.left, value);
      } else {
        node.right = removeElement(node.right, value);
      }
      return node;
    }
  }

  min() {
    let currentNode = this._root;

    while (currentNode) {
      if (!currentNode.left) {
        return currentNode.data;
      } else {
        currentNode = currentNode.left;
      }
    }

  }

  max() {
    let currentNode = this._root;

    while (currentNode) {
      if (!currentNode.right) {
        return currentNode.data;
      } else {
        currentNode = currentNode.right;
      }
    }

  }
}

module.exports = {
  BinarySearchTree
};