# linked-lists

Odin Project exercise to practice working with linked lists.

## Requirements:

You will need two classes or factories:

- LinkedList class / factory, which will represent the full list.
- Node class / factory, containing a value property and a nextNode property, set both as null by default.

Build the following functions in your linked list class / factory:

1. append(value) adds a new node containing value to the end of the list
2. prepend(value) adds a new node containing value to the start of the list
3. size returns the total number of nodes in the list
4. head returns the first node in the list
5. tail returns the last node in the list
6. at(index) returns the node at the given index
7. pop removes the last element from the list
8. contains(value) returns true if the passed in value is in the list and otherwise returns false.
9. find(value) returns the index of the node containing value, or null if not found.
10. toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null

## Extra credit

- insertAt(value, index) that inserts a new node with the provided value at the given index.
- removeAt(index) that removes the node at the given index.

Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.
