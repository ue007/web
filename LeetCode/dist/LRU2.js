// 节点类
var LinkNode = /** @class */ (function () {
    function LinkNode(key, val) {
        this.key = key;
        this.val = val;
    }
    return LinkNode;
}());
// LRU 缓存策略
var LRU2Cache = /** @class */ (function () {
    function LRU2Cache(capacity) {
        this.size = 0; // 总容量大小
        this.curLen = 0; // 当前已装载数
        this.hashMap = {};
        // 设置总容量
        this.size = capacity;
        // 创建两个初始哨兵节点
        this.dummyHead = new LinkNode(-1, -1);
        this.dummyNail = new LinkNode(-1, -1);
        // 先构成一个双向链表结构
        this.dummyHead.next = this.dummyNail;
        this.dummyHead.prev = this.dummyNail;
        this.dummyNail.next = this.dummyHead;
        this.dummyNail.prev = this.dummyHead;
    }
    LRU2Cache.prototype.get = function (key) {
        var node = this.hashMap[key];
        if (node) {
            // 如果hash表存在节点
            this.moveNodeToHead(node); // 访问节点，将节点提到头节点
            return node.val;
        }
        return -1;
    };
    LRU2Cache.prototype.put = function (key, value) {
        var node = this.hashMap[key];
        if (node) {
            // 如果已经存在节点
            this.moveNodeToHead(node); // 访问节点，将节点提到头节点
            node.val = value; // 更新val
        }
        else {
            node = new LinkNode(key, value); // 创建节点
            if (this.curLen === this.size) {
                // 如果满载
                var rmNode = this.removeLastNode(); // 移除最少访问（最后的）节点
                delete this.hashMap[rmNode.key]; // 删除引用key
            }
            this.addNode(node);
            this.hashMap[key] = node;
        }
    };
    // 把节点移动双链表头部
    LRU2Cache.prototype.moveNodeToHead = function (node) {
        this.removeNode(node); // 先移除
        this.addNode(node); // 再加入头部
    };
    // 移除指定节点
    LRU2Cache.prototype.removeNode = function (node) {
        var prev = node.prev; // 拿到当前node前驱节点
        var next = node.next; // 拿到当前node后置节点
        prev.next = next; // 将node前置节点，直接指向node后置节点
        next.prev = prev; // 将node后置节点, 直接指向node前置节点
        node.prev = null; // 删除当前node prev引用
        node.next = null; // 删除当前node next引用
        this.curLen--;
        return node;
    };
    // 添加指定节点到头部
    LRU2Cache.prototype.addNode = function (node) {
        var oldHead = this.dummyHead.next; // 缓存老的头节点
        this.dummyHead.next = node; // 把当前节点作为新的头节点
        node.prev = this.dummyHead; // 把当前节点prev指向虚拟头节点
        node.next = oldHead; // 把当前节点next指向老头节点
        oldHead.prev = node; // 老头节点prev指回新头节点
        this.curLen++;
    };
    // 移除少使用的节点（最后）
    LRU2Cache.prototype.removeLastNode = function () {
        var last = this.dummyNail.prev; // 尾节点
        return this.removeNode(last);
    };
    return LRU2Cache;
}());
var cache2 = new LRU2Cache(2);
cache2.put(1, 1);
cache2.put(2, 2);
cache2.get(1); // 返回  1
cache2.put(3, 3); // 该操作会使得密钥 2 作废
cache2.get(2); // 返回 -1 (未找到)
cache2.put(4, 4); // 该操作会使得密钥 1 作废
cache2.get(1); // 返回 -1 (未找到)
cache2.get(3); // 返回  3
cache2.get(4); // 返回  4
//# sourceMappingURL=LRU2.js.map