function inheritObject(o) {
    function F() {
        
    }
    F.prototype = o;

    return new F();
}

function inheritPrototype(subClass,superClass) {
    var p = inheritObject(superClass.prototype);
    p.constructor = subClass;
    subClass.prototype = p;
}


function SuperClass(name) {
    
    this.name = name;
    this.colors = [1,2,3]
}

SuperClass.prototype.getName = function () {
    console.log(this.name)
}

function SubClass(name,time) {
    SuperClass.call(this,name);
    this.time = time;

}

inheritPrototype(SubClass,SubClass)


SubClass.prototype.getTime = function () {
    console.log(this.time)
}




var i1 = new SubClass('a',1)

i1.colors.push(4)
console.log(i1)
console.log(i1.__proto__)