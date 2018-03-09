class Queue {

  constructor() {
    // 定义一个数组来保存队列里面的元素
    this.items = []
  }

  // 在队列尾部添加一个或者多个元素
  enqueue(element) {
    this.items.push(element)
  }
  // 移除队列顶部的元素，并返回被移除的元素
  dequeue() {
    return this.items.shift()
  }
  // 清空队列
  remove() {
    this.items = []
  }
  // 返回队列顶部的元素，不对队列本身做修改
  front() {
    return this.items[0]
  }
  // 判断队列是否为空
  isEmpty() {
    return this.items.length === 0
  }
  // 返回队列里面元素的个数
  length() {
    return this.item.length
  }

  print() {
    this.items.forEach((item, index) => {
      console.log(item)
      console.log(index)
    })
  }
}

export const queue = new Queue()

/*队列使用*/
// const queue = new Queue()

// queue.isEmpty() // true

// queue.push('我是队列的第一个元素')
// queue.push('我是队列的第二个元素')

// queue.print() // 1: 我是队列的第一个元素 2：我是队列的第二个元素

// queue.dequeue() // 我是队列的第一个元素

// queue.front() // 我是队列的第二个元素

// queue.length() // 1

// queue.isEmpty() // false

// queue.remove() // 这时队列里面已经没有元素了

// queue.isEmpty() // true
