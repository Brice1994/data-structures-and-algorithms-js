class Node {
    data;
    next;
    constructor(data) {
        this.data = data;
    }
}

class LinkedList {
    head;
    tail;
    constructor(data){
        this.head = new Node(data);
        this.tail = this.head;
    }
    add(data){
        this.tail.next = new Node(data);
        this.tail = this.tail.next;
    }

    size() {
        let pointer = this.head;
        let size =0;
        while(pointer){
            size++;
            pointer = pointer.next;
        }
        return size;
    }
    toString() {
        let items = [];
        let pointer = this.head;
        while(pointer){
            items.push(pointer.data);
            pointer = pointer.next;
        }
        return items.join(",");
    }
    getAtIndex(index){
        let pointer = this.head;
        let i = 0;
        while(pointer && i < index){
            pointer = pointer.next;
            i++;
        }
        return pointer;
    }
    removeAtIndex(index){
        let item = this.getAtIndex(index - 1);
        if(!item){
            throw new Error(`Nothing at index ${index - 1}, so unable to remove next at ${index}`);
        }
        item.next = item.next.next;
    }
    remove(){
        let node = this.head;
        this.head = this.head.next;
        return node;
    }

}

let ll = new LinkedList(1);
ll.add(5);
ll.add(6);
ll.add(7);
console.log(ll.toString());
ll.add(8);
ll.add(9);
console.log(ll.toString());
ll.remove();
ll.remove();
console.log(ll.toString());
