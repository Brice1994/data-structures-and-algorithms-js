class Heap {
    heap;
    constructor(){
        this.heap = []
    }
    insert(val){
        this.heap.push(val);
        this.bubbleUp();
    }
    toString() {
        return this.heap.join(" ");
    }
    bubbleUp(){
        let index = this.heap.length - 1;
        while(index > 0){
            let element = this.heap[index];
            let parentIndex = Math.floor((index - 1)/2);
            let parent = this.heap[parentIndex];
            
            if(parent >= element){
                break;
            }
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }
}
let h = new Heap();
h.insert(30);
h.insert(20);
h.insert(10);
console.log(h.toString());
h.insert(40);
h.insert(50);
h.insert(60);
h.insert(1);
h.insert(5);
h.insert(6);
h.insert(70);
console.log(h.toString());