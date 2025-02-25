import Node from "./Node.js";

export default function LinkedList() {
  let head = null;
  let tail = null;
  let size = 0;

  //adds a new node containing value to the end of the list
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

  //adds a new node containing value to the start of the list
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

  //at(index) returns the node at given index
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
  //removes the last element from the list
  function pop() {
    if (!tail) {
      return "List is empty";
    } else {
      let currentNode = head;
      for (let i = 1; i < size - 1; i++) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = null;
      tail = currentNode;

      size--;
    }
  }

  //represents your LinkedList objects as strings
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
  return { append, prepend, at, pop, toString, getHead, getTail, getSize };
}
