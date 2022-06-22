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

class LRUCache {
	capacity: number;
	map: Map<number, number> = new Map();

	constructor(capacity: number) {
		this.capacity = capacity;
	}

	get(key: number): number {
		const val = this.map.get(key);
		if (val === undefined) {
			return -1;
		}
		this.map.delete(key);
		// 获取后，将值设置到底部
		this.map.set(key, val);
		return val;
	}

	put(key: number, value: number): void {
		this.map.delete(key);
		// 将值设置到底部
		this.map.set(key, value);
		// 获取所有的key
		const keys = this.map.keys();
		//  如果超出缓存进行删除，map.keys().next()可以取得到他排第一的键值，map.set()操作类似数组的push操作
		while (this.map.size > this.capacity) {
			this.map.delete(keys.next().value);
		}
	}
}

const cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // 返回  1
cache.put(3, 3); // 该操作会使得密钥 2 作废
cache.get(2); // 返回 -1 (未找到)
cache.put(4, 4); // 该操作会使得密钥 1 作废
cache.get(1); // 返回 -1 (未找到)
cache.get(3); // 返回  3
cache.get(4); // 返回  4
