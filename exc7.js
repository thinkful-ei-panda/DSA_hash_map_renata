/* eslint-disable no-prototype-builtins */
/* eslint-disable no-console */
//7 - Separate Chaining

class Node {
  constructor( data ) {
    this.data = data;
    this.next = null;
  }
}
  
class HashMap {
  constructor(initialCapacity=8) {
    this.size = 0;
    this._hashTable = new Array(initialCapacity);
    this._capacity = initialCapacity;
    this._deleted = 0;
  }
  
  set(item) {
    let key = this._hashString(item);
    let node = new Node(item);
    if (this._hashTable[key]) {
      node.next = this._hashTable[key];
    }
    this._hashTable[key] = node;
  }
  
  get(key) {
    let hash = this._hashString(key);
    if(!this._hashTable[hash]) return null;
    let chain = this._hashTable[hash];
    if(chain.hasOwnProperty(key)) {
      return chain[key];
    }
    return null;
  }
  
  remove(item) {
    let key = this._hashString(item);
    if (this._hashTable[key]) {
      if (this._hashTable[key].data === item) {
        this._hashTable[key] = this._hashTable[key].next;
      } else {
        let current = this._hashTable[key].next;
        let prev = this._hashTable[key];
        while(current) {
          if ( current.data === item ) {
            prev.next = current.next;
          }
          prev = current;
          current = current.next;
        }
      }
    }
  }
    
  _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }
}
  
const map = new HashMap();
map.set('Elan');
map.set('Elan');
map.remove('Elan');
map.set('name', 'Elan');
map.set('name', 'Elan2');
map.set('name', 'Elan3');
console.log(map.get('name'));
console.log(map._hashTable);