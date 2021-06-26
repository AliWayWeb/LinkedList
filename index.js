class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    // Insert first Node
    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.size++
    }

    // Insert last Node
    insertLast(data) {
        let node = new Node(data)
        let current

        // if empty, make head
        if (!this.head) {
            this.head = node
        } else {
            current = this.head

            while (current.next) {
                current = current.next
            }

            current.next = node
        }
        this.size++
    }

    // Insert at Index
    insertAt(data, index) {
        // if index is out of range
        if (index > 0 && index > this.size) {
            return
        }

        // if first index 
        if (index === 0) {
            this.head = new Node(data, this.head)
            return
        }

        const node = new Node(data)
        let current, previos

        // Set current to first 
        current = this.head
        let count = 0

        while (count < index) {
            previos = current // Node before index
            count++
            current = current.next // Node after index
        }

        node.next = current
        previos.next = node

        this.size++
    }

    // Get at Index 
    getAt(index) {
        let current = this.head
        let count = 0

        while (current) {
            if (count == index) {
                console.log(current.data);
            }
            count++
            current = current.next
        }

        return null
    }

    // Remove at Index
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return
        }

        let current = this.head
        let previos 
        let count = 0

        // Remove first 
        if(index === 0) {
            this.head = current.next
        } else {
            while(count < index) {
                count++
                previos = current
                current = current.next
            }
            previos.next = current.next
        }

        this.size--
    }

    // Clear List
    clearList() {
        this.head = null
        this.size = 0
    }

    // Print List data
    printListData() {
        let current = this.head

        while (current) {
            console.log(current.data);
            current = current.next
        }
    }
}

const ll = new LinkedList()

// ll.insertFirst(100)
// ll.insertLast(400)
// ll.clearList()
// ll.insertAt(200, 2)
// ll.getAt(3)
// ll.printListData()
// ll.removeAt(0)
