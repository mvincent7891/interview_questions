
export class Heap {
  constructor () {
    this.store = [];
    this.prc = (a, b) => {
      if (a === b) {
        return 0;
      } else if (a < b) {
        return -1;
      } else {
        return 1;
      }
    };
  }

  peek () {
    return this.store[this.store.length - 1];
  }

  insert (element) {
    this.store.push(element);
    this._heapifyUp();
  }

  remove () {
    if (this.store.length === 0) {
      return null;
    }
    let lastIdx = this.store.length - 1;
    [this.store[0], this.store[lastIdx]] = [this.store[lastIdx], this.store[0]];
    let returnElement = this.store.pop;
    this._heapifyDown();
    return returnElement;
  }

  _parentIdx (idx) {
    let parent = idx === 0 ? (null) : ((idx - 1) / 2);
    return parent;
  }

  _childIndices (idx) {
    let rawIndices = [ 2 * idx + 1, 2 * idx + 2 ];
    return rawIndices.filter(idx2 => {
      idx2 < this.store.length;
    });
  }

  _heapifyUp () {
    let store = this.store;
    let currentIdx = store.length - 1;
    let parentIdx = this._parentIdx(currentIdx);
    while (parentIdx && this.prc(store[parentIdx], store[currentIdx]) === 1) {
      [store[parentIdx], store[currentIdx]] = [store[currentIdx], store[parentIdx]];
      currentIdx = parentIdx;
      parentIdx = this._parentIdx(parentIdx);
    }
  }

  _heapifyDown () {
    let store = this.store;
    let currentIdx = 0;
    let childIndices = this._childIndices(currentIdx);
    while (childIndices.length > 0) {
      let children = childIndices.map(idx => store[idx]);
      let minChild = ( children.length === 1 ||
        this.prc(children[0], children[1]) < 0 ) ? children[0] : children[1];
      let minChildIdx = minChild === children[0] ? childIndices[0] : childIndices[1];

      if (this.prc(store[currentIdx], minChild) > 0) {
        [store[currentIdx], store[minChildIdx]] = [store[minChildIdx], store[currentIdx]];
        currentIdx = minChildIdx;
        childIndices = this._childIndices(currentIdx);
      } else {
        break;
      }
    }
  }
}
