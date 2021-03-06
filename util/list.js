export class Link {
  constructor (value) {
    this.value = value;
    this.nextLink = null;
    this.prevLink = null;
  }
}

export class LinkedList {
  constructor () {
    this.head = new Link(null);
    this.tail = new Link(null);
    this.head.nextLink = this.tail;
    this.tail.prevLink = this.head;
    this.count = 0;
  }

  sortedInsert (value) {
    let newLink = new Link(value);
    let neighbor = this.head;
    while (neighbor.nextLink.value && neighbor.nextLink.value < value) {
      neighbor = neighbor.nextLink;
    }
    newLink.nextLink = neighbor.nextLink;
    newLink.prevLink = neighbor;
    neighbor.nextLink = newLink;
    newLink.nextLink.prevLink = newLink;

    this.count += 1;
  }

  shift () {
    if (this.count === 0) {
      return null;
    }

    let firstLink = this.head.nextLink;
    this.head.nextLink = firstLink.nextLink;
    this.head.nextLink.prevLink = this.head;

    this.count -= 1;
    return firstLink;
  }

  unshift (value) {
    let newLink = new Link(value);

    this.head.nextLink.prevLink = newLink;
    newLink.nextLink = this.head.nextLink;
    newLink.prevLink = this.head;
    this.head.nextLink = newLink;

    this.count += 1;
    return newLink;
  }

  pop () {
    if (this.count === 0) {
      return null;
    }

    let lastLink = this.tail.prevLink;
    this.tail.prevLink = lastLink.prevLink;
    this.tail.prevLink.nextLink = this.tail;

    this.count -= 1;
    return lastLink;
  }

  push (value) {
    let newLink = new Link(value);

    this.tail.prevLink.nextLink = newLink;
    newLink.prevLink = this.tail.prevLink;
    newLink.nextLink = this.tail;
    this.tail.prevLink = newLink;

    this.count += 1;
    return newLink;
  }

}
