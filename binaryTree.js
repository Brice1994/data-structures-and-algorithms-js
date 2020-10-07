
class BinaryTree {
    root;
    constructor(root = null){
        this.root = {
            data: root
        }
    }
    add(node){
        let pointer = this.root;
        
        while(true){
            if(node < pointer.data){
                if(!pointer.left){
                    pointer.left = {
                        data: node,
                    }
                    break;
                }
                pointer = pointer.left;
            } else {
                if( !pointer.right) {
                    pointer.right = {
                        data: node,
                    }
                    break;
                }
                pointer = pointer.right;
            }
        }
    }
}
let btree = new BinaryTree(5);
btree.add(6);
btree.add(4);
btree.add(7);
btree.add(8);
btree.add(9);
btree.add(1);

console.log(JSON.stringify(btree, null, 2));