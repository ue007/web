/**
 * 题目：https://leetcode.cn/problems/lru-cache-lcci/
 * 获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
 * 写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。
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

class LRU3Cache {
	private map: Map<number, number> = new Map();
	private capacity: number = 10;

	constructor(capacity: number) {
		this.capacity = capacity;
	}

	/**
	 *
	 * @param key
	 * @returns
	 * 1. 不存在，返回-1
	 * 2. 存在
	 * 	2.1 重新排序
	 *  2.2 返回value
	 */
	get(key: number): number {
		const value = this.map.get(key);
		// 1. 不存在
		if (value === undefined) return -1;

		// 2. 存在
		this.map.delete(key);
		this.map.set(key, value);
		console.log(`get(${key}); result:`, this.map, 'value:', value);
		return value;
	}

	/**
	 *
	 * @param key
	 * @param value
	 *
	 */
	put(key: number, value: number): void {
		// 1. 不管存不存在，直接删除
		this.map.delete(key);

		// 2. 将最新的值放在最后
		this.map.set(key, value);

		// 3. 获取所有的key
		const keys = this.map.keys();
		console.log('keys:', keys);
		// 4. 如果超出缓存进行删除，map.keys().next()可以取得到他排第一的键值，map.set()操作类似数组的push操作
		while (this.map.size > this.capacity) {
			console.log(keys.next().value);
			this.map.delete(keys.next().value);
		}

		console.log(`put(${key},${value}); result:`, this.map);
	}
}

const cache3 = new LRU3Cache(2);

cache3.put(1, 1);
cache3.put(2, 2);
cache3.get(1); // 返回  1
cache3.put(3, 3); // 该操作会使得密钥 2 作废
cache3.get(2); // 返回 -1 (未找到)
cache3.put(4, 4); // 该操作会使得密钥 1 作废
cache3.get(1); // 返回 -1 (未找到)
cache3.get(3); // 返回  3
cache3.get(4); // 返回  4
