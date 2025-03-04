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
    if (index < 0 || index >= size) return null;

    let currentNode = head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }

    return currentNode.value;
  }

  //removes the last element from the list
  function pop() {
    if (!head) return null; // If list is empty, return null

    if (size === 1) {
      let removedValue = head.value;
      head = null;
      tail = null;
      size = 0;
      return removedValue;
    }

    let currentNode = head;
    while (currentNode.nextNode !== tail) {
      // Find second-to-last node
      currentNode = currentNode.nextNode;
    }

    let removedValue = tail.value;
    currentNode.nextNode = null;
    tail = currentNode;
    size--;

    return removedValue;
  }

  //returns true if the passed in value is in the list and otherwise returns false.
  function contains(value) {
    let currentNode = head;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }
  //returns the index of the node containing value, or null if not found.
  function find(value) {
    let currentNode = head;
    let index = 0;
    while (currentNode) {
      if (value === currentNode.value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }

    return null;
  }

  //inserts a new node with the provided value at the given index.
  function insertAt(value, index) {
    if (index <= 0) {
      prepend(value);
    } else if (index >= size) {
      append(value);
    } else {
      let insertedNode = new Node(value);
      let currentNode = head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.nextNode;
      }
      insertedNode.nextNode = currentNode.nextNode;
      currentNode.nextNode = insertedNode;
    }
    size++;
  }
  //removes the node at the given index.
  function removeAt(index) {
    if (!head || index < 0 || index >= size) {
      return "Index out of bounds";
    }

    if (index === 0) {
      head = head.nextNode;
      if (size === 1) tail = null; // If list had only one element, update tail
      size--;
      return;
    }

    if (index === size - 1) {
      pop();
      return;
    }

    let currentNode = head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = currentNode.nextNode.nextNode;
    size--;
  }

  //represents your LinkedList objects as strings
  function toString() {
    let string = "";
    let displayedNode = head;
    while (displayedNode) {
      // So null returns for the last value
      string += `(${displayedNode.value}) -> `;
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
  return {
    append,
    prepend,
    at,
    pop,
    contains,
    find,
    insertAt,
    removeAt,
    toString,
    getHead,
    getTail,
    getSize,
  };
}
