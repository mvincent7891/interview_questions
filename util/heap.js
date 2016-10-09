
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
    }
  }

  peek () {
    return this.store[this.store.length - 1];
  }

  insert (element) {
    this.store.push(el);
    this.heapifyUp();
  }

  remove () {
    if (this.store.length === 0) {
      return null;
    }
    let lastIdx = this.store.length - 1;
    [this.store[0], this.store[lastIdx]] = [this.store[lastIdx], this.store[0]];
    let returnElement = this.store.pop;
    heapifyDown();
    return returnElement;
  }

  _parentIdx(idx) {
    let parent = idx === 0 ? (null) : ((idx - 1) / 2)
    return parent;
  }

  _childIndices(idx) {
    let rawIndices = [ 2 * idx + 1, 2 * idx + 2 ];
    return rawIndices.filter(idx2 => {
      idx2 < this.store.length
    });
  }

  _heapifyUp() {

  }

  _heapifyDown() {

  }
}

  def heapify_up
    curr_idx = @store.length - 1
    parent_i = parent_idx(curr_idx)


    while  parent_i && @prc.call(@store[parent_i], @store[curr_idx]) == 1
      @store[parent_i], @store[curr_idx] = @store[curr_idx], @store[parent_i]
      @curr_idx = parent_i
      parent_i = parent_idx(parent_i)
    end
  end

  def heapify_down
    curr_idx = 0
    child_idx = child_indices(curr_idx)

    while child_idx.length > 0
      children = child_idx.map{|i| @store[i]}
      min_child = ( children.length == 1 || @prc.call(children[0], children[1] < 0) ) ? children[0] : children[1]
      min_child_idx = min_child == children[0] ? child_idx[0] : child_idx[1]

      if @prc.call(@store[curr_idx], min_child) > 0
        @store[curr_idx], @store[min_child_idx] = @store[min_child_idx], @store[curr_idx]
        curr_idx = min_child_idx
        child_idx = child_indices(curr_idx)
      else
        break
      end
    end
  end
end
