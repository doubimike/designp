var page = page || {};

page.dom = page.dom ||{};
page.dom.Text = function () {
    this.insert = function (where) {
        var txt = document.createTextNode(this.url);
        where.appendChild(txt);
    }
}

page.dom.Link = function () {
    this.insert = function (where) {
        var link = document.createElement('a')
        link.href = this.url;
        link.appendChild(document.createTextNode(this.url))
        
        where.appendChild(txt);
    }
}

page.dom.Image = function () {
    this.insert = function (where) {
        var im = document.createElement('img')
        im.src = this.url;        
        where.appendChild(txt);
    }
}

page.dom.factory = function (type) {
    return new page.dom[type];
}

var o = page.dom.factory('Link');
o.url = 'aaa'
o.insert(document.body);