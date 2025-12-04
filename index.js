class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    search(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) return true;
            current = value < current.value ? current.left : current.right;
        }
        return false;
    }

    delete(value) {
        this.root = this._deleteRecursively(this.root, value);
    }

    _deleteRecursively(node, value) {
        if (!node) return null;

        // لو القيمة أصغر → روح للشمال
        if (value < node.value) {
            node.left = this._deleteRecursively(node.left, value);
        }
        // لو القيمة أكبر → روح لليمين
        else if (value > node.value) {
            node.right = this._deleteRecursively(node.right, value);
        }
        // لو لقيت القيمة المطلوبة
        else {
            // الحالة 1️⃣ : مفيش أبناء
            if (!node.left && !node.right) {
                return null;
            }

            // الحالة 2️⃣ : ابن واحد
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            // الحالة 3️⃣ : ابنين → نجيب أصغر قيمة في اليمين
            let minNode = this._findMin(node.right);
            node.value = minNode.value;
            node.right = this._deleteRecursively(node.right, minNode.value);
        }

        return node;
    }

    _findMin(node) {
        while (node.left) node = node.left;
        return node;
    }

    printInOrder(node = this.root) {
        if (!node) return;
        this.printInOrder(node.left);
        console.log(node.value);
        this.printInOrder(node.right);
    }
}

const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);

const node = new Node()

console.log("🔹 قبل الحذف:");
bst.printInOrder();

bst.delete(3); // نحذف العقدة 3

console.log("🔸 بعد الحذف:");
bst.printInOrder();


// -----------------------------------------------------------

function helloWorld(console) {
    return console.log("hello world!")
}

helloWorld(console)

// -----------------------------------------------------------