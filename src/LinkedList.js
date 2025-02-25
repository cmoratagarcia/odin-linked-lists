import Node from "./Node.js";

export default function LinkedList() {
  let head = null;
  let tail = null;
  let size = 0;

  function append(value) {
    let node = Node(value);
    if (!head) {
      head = node;
      tail = node;
    } else {
      tail.nextNode = node;
      tail = node;
    }
    size++;
  }

  function prepend(value) {
    let node = Node(value);
    if (!head) {
      head = node;
      tail = node;
    } else {
      node.nextNode = head;
      head = node;
    }
    size++;
  }

  // Getter functions to access private variables
  function getSize() {
    return size;
  }

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  }

  function at(index) {
    if (index < size) {
      let currentNode = head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.nextNode;
      }

      return currentNode.value;
    } else {
      return "Nothing at that index";
    }
  }

  function toString() {
    let string = "";
    let displayedNode = head;
    while (displayedNode) {
      // So null returns for the last value
      string += `(${displayedNode.value} ) -> `;
      displayedNode = displayedNode.nextNode;
    }
    return string + "null";
  }

  return { append, prepend, getHead, getTail, getSize, at, toString };
}
