function depthFirstSearch(node, val){
    let queue = [];
    let discovered = new WeakMap();
    discovered.set(node, true);
    queue.push(node);
    while(queue.length > 0){
        let front = queue.pop();
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
                    val: 3,
                    children: [
                        {
                            val: 4,
                        },
                        {
                            val: 5,
                        },
                    ]
                },
                {
                    val: 6,
                },
            ]
        },
        {
            val: 7,
        },
        {
            val: 8,
            children: [
                {
                    val: 9,
                    children: [
                        {
                            val: 10,
                        },
                        {
                            val: 11,
                        },
                    ]
                },
                {
                    val: 12,
                },
            ]
        },
    ]
}
console.log(depthFirstSearch(tree, 21))