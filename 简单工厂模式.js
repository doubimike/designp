var LoginAlert = function (text) {
    this.content = text;
}

LoginAlert.prototype.show = function () {
    console.log(this.content)    
}

var userNameAlert = new LoginAlert('用户名不能多于16个字母或数字');

userNameAlert.show();



var passwordAlert = new LoginAlert('输入的密码不正确');

passwordAlert.show()

var LoginConfirm = function (text) {
    this.content = text;
};

LoginConfirm.prototype.show = function () {
    
}

var loginFailConfirm = new LoginConfirm('您的用户名不存在，请重新输入');
loginFailConfirm.show();

var LoginPrompt = function (text) {
    this.content = text;
}

LoginPrompt.prototype.show = function () {
    // 显示提示框
}


var PopFactory = function (name) {
    switch(name){
        case 'alert': 
            return new LoginAlert();
        case 'confirm': 
            return new LoginConfirm();
        case 'prompt': 
            return new LoginPrompt();
    }
}


var Basketball = function () {
    this.intro = '篮球盛行于美国';
}

Basketball.prototype ={
    getMember: function () {
        console.log('每个队伍需要5名队员');
    },
    getBallSize: function () {
        console.log('篮球很大');
    }
}

var Football = function () {
    this.intro = '足球在世界范围内很流行';
}

Football.prototype ={
    getMember: function () {
        console.log('每个队伍需要11名队员');
    },
    getBallSize: function () {
        console.log('足球很大');
    }
}


var Tennis = function () {
    this.intro = '每年有很多网球系列赛';
}

Tennis.prototype ={
    getMember: function () {
        console.log('每个队伍需要1名队员');
    },
    getBallSize: function () {
        console.log('足球很小');
    }
}


var SportsFactory = function (name) {
    switch(name){
        case 'NBA': 
            return new Basketball();
        case 'wordCup': 
            return new Football();
        case 'FrenchOpen': 
            return new Tennis();
    }
}



var football = SportsFactory('wordCup');
console.log(football)
console.log(football.intro)
football.getMember()


function createBook(name,time,type) {
    var o = new Object();
    o.name = name;
    o.time = time;
    o.type = type;
    o.getName = function () {
        console.log(this.name);
    }

    return o;
}

var book1 = createBook('js book',2014,'js')
var book2 = createBook('css book',2014,'css')
book1.getName()
book2.getName()




function createPop(type,text) {
    var o = new Object();
    o.content = text;
    o.show = function () {
        
    }
    if(type=='alert'){

    }
    if(type=='prompt'){

    }
    if(type=='confirm'){

    }

    return o;
}