var productsEnums = {
    flight: 'flight',
    hotel: 'hotel',
    ticket: 'ticket'
}

function Flight() {
    console.log('This is Flight');
}

function Hotel() {
    console.log('This is Hotel');
}

function Ticket() {
 console.log('This is Ticket');   
}

function User() {
    this.shopCart = [];
}

User.prototype = {
    constructor: User,
    order: function (productType) {
        var product = null;
        switch (productType) {
            case productsEnums.flight:
                product = new Flight();
                break;
            case productsEnums.hotel: 
                product = new Hotel();
                    break;
            default:
                // statements_def
                break;
        }
        this.shopCart.push(product);
    }
}

var user = new User();
user.order(productsEnums.flight);


var productFactory = (function () {
    var productFactories = {
        flight : function () {
            return new Flight();
        },
        hotel: function () {
            return new Hotel();
        },
        ticket: function () {
            return new Ticket();
        }
    };
    return {
        createProduct: function (productType) {
            return productFactories[productType]();
        }
    }
})();

User.prototype = {
    constructor: User,
    order: function (productType) {
        this.shopCart.push(productFactory.createProduct(productType));
    }
}

var user2 = new User();
user2.order(productsEnums.ticket);
