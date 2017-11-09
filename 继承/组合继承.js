function SuperClass(name) {
    this.name = name;
    this.books = [1,2,3]
}

SuperClass.prototype.getName = function () {
    console.log(this.name)
}

function SubClass(name,time) {
        SuperClass.call(this,name);
        this.time = time;
}

SubClass.prototype = new SuperClass();

SubClass.prototype.getTime = function () {
    console.log(this.time)
}


var i1 = new SubClass('2',2014)
i1.books.push(5)
console.log(i1.books)
console.log(i1.__proto__.books)