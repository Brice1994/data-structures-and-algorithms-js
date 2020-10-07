function breadthFirstSearch(node, val){
    let queue = [];
    let discovered = new WeakMap();
    discovered.set(node, true);
    queue.push(node);
    while(queue.length > 0){
        let front = queue.shift();
        console.log(front.val);
        if(front.val === val){
            return front;
        }
        if(front.children){
            for(let n of front.children){
                if(!discovered.get(n)){
                    discovered.set(n, true);
                    queue.push(n);
                }
            }
        }
    }
}
let tree = {
    val: 1,
    children: [
        {
            val: 2,
            children: [
                {
                    val: 5,
                },
                {
                    val: 6,
                },
            ]
        },
        {
            val: 3,
        },
        {
            val: 4,
        },
    ]
}
console.log(breadthFirstSearch(tree, 21))