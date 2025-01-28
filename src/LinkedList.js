import Node from "./Node.js";

export default function LinkedList() {
  let head = null;
  let tail = null;
  let size = 0;

  function append(value) {
    let node = Node();
    node.value = value;
    tail = node;
  }

  return { append };
}
