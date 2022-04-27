const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

 function removeKFromList( l, k ) {
  let prev = null ;
  let current = l ;

  if ( l.value == k) {
    l.value = l.next.value;
    l.next = l.next.next;
  }

  while( current.next ) {
    prev = current;
    current = current.next ;
    
    if (current.value == k & current.next == null) {
      prev.next = null;

    }
    else {

    if ( current.value == k )  {
      current.value = current.next.value;
      current.next = current.next.next;

      if ( current.value == k ) {
        current.value = current.next.value;
        current.next = current.next.next;
      }

    }
    }
  }
  if ( current.value == k ) {
    //prev.next = null; 
  }


  return l ;
}

module.exports = {
  removeKFromList
};