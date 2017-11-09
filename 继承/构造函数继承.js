function SuperClass(id) {
    
    this.books=[1,2,3]
    this.id = id;
}

SuperClass.prototype.showBooks = function () {
    console.log(this.books);
}

function SubClass(id) {
    SuperClass.call(this,id);
}

var i1 = new SubClass(10)
var i2 = new SubClass(20)

i1.books.push(4)

console.log(i1.books)
console.log(i2.books)

i1.showBooks()