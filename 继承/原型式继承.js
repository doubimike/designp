function inheritObject(o) {
    function F() {
        
    }
    F.prototype = o;

    return new F();
}


var book = {
    name: 'js bookd',
    alikeBook: ['css book','ng book']
}


var newBook = inheritObject(book);

console.log('newBook',newBook.name)
newBook.name ='aa'
console.log('newBook',newBook.name)

var n2 = inheritObject(book)
console.log(n2.name)