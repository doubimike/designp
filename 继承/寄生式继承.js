var book  ={
    name: 'js bookd',
    alikeBook: ['css ','ng']
}


function inheritObject(o) {
    function F() {
        
    }
    F.prototype = o;

    return new F();
}



function createBook(obj) {
    var o = new inheritObject(obj);
    o.getName = function () {
        console.log(this.name);
    }

    return o;
}

var b = createBook(book)
console.log('b',b)
console.log('b.__proto__',b.__proto__)
b.getName()