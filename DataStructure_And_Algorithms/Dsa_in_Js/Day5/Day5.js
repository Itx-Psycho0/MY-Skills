// Day5
//Linked List
// A linked list is a linear data structure where elements, callled nodes, are not stored contiguously in memory. instead, each node contains data and a reference, or link, to the next node in the sequence.

class Node{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    //Push node
    push(value){

        const newNode = new Node(value);
        
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
}

const myLinkedList = new LinkedList(1);
console.log(myLinkedList);
myLinkedList.push(2);
console.log(myLinkedList);
myLinkedList.push(3);
console.log(myLinkedList);


