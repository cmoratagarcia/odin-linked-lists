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

  return { append, toString };
}
