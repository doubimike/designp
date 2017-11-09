function SuperClass() {
    this.superValue = true;
}

SuperClass.prototype.getSuperValue = function () {
    return this.superValue;
}

function SubClass() {
    this.subValue = false;
}

SubClass.prototype = new SuperClass();

SubClass.prototype.getSubValue = function () {
    return this.subValue
}

var s = new SubClass()
console.log(s.subValue)
console.log(s.superValue)
console.log(s instanceof SubClass)
console.log(s instanceof SuperClass)
console.log(SubClass instanceof SuperClass)
console.log(SubClass.prototype instanceof SuperClass)





function SuperClass() {
    this.books = [1,2,3]
}

function SubClass() {
    
}

SubClass.prototype = new SuperClass();

var i1 = new SubClass()
var i2 = new SubClass();

i1.books.push(4)

console.log(i2.books)