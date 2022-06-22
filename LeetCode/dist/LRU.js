/**
 * 题目：https://leetcode.cn/problems/lru-cache-lcci/
 * @example
 * LRUCache cache = new LRUCache( 2 );
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1);       // 返回  1
 * cache.put(3, 3);    // 该操作会使得密钥 2 作废
 * cache.get(2);       // 返回 -1 (未找到)
 * cache.put(4, 4);    // 该操作会使得密钥 1 作废
 * cache.get(1);       // 返回 -1 (未找到)
 * cache.get(3);       // 返回  3
 * cache.get(4);       // 返回  4
 */
var LRUCache = /** @class */ (function () {
    function LRUCache(capacity) {
        this.map = new Map();
        this.capacity = capacity;
    }
    /**
     *
     * @param key
     * @returns
     */
    LRUCache.prototype.get = function (key) {
        var val = this.map.get(key);
        if (val === undefined) {
            return -1;
        }
        this.map.delete(key);
        // 获取后，将值设置到底部
        this.map.set(key, val);
        console.log("get(".concat(key, "); result:"), this.map, 'value:', val);
        return val;
    };
    LRUCache.prototype.put = function (key, value) {
        this.map.delete(key);
        // 将值设置到底部
        this.map.set(key, value);
        // 获取所有的key
        var keys = this.map.keys();
        console.log(keys);
        //  如果超出缓存进行删除，map.keys().next()可以取得到他排第一的键值，map.set()操作类似数组的push操作
        while (this.map.size > this.capacity) {
            console.log(keys.next().value);
            this.map.delete(keys.next().value);
        }
        console.log("put(".concat(key, ",").concat(value, "); result:"), this.map);
    };
    return LRUCache;
}());
var cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // 返回  1
cache.put(3, 3); // 该操作会使得密钥 2 作废
cache.get(2); // 返回 -1 (未找到)
cache.put(4, 4); // 该操作会使得密钥 1 作废
cache.get(1); // 返回 -1 (未找到)
cache.get(3); // 返回  3
cache.get(4); // 返回  4
//# sourceMappingURL=LRU.js.map