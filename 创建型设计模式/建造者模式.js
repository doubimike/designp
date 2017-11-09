var Human = function (param) {
	this.skill = param && param.skill ||'保密';
	this.hobby = param && param.hobby ||'保密';

}

Human.prototype = {
	getSkill :function () {
		return this.skill;
	},
	getHobby :function () {
		return this.hobby;
	}
}

var Named = function (name) {
	var that = this;
	(function (name,that) {
		that.wholeName = name;
		if (name.indexOf(' ')>-1) {
			that.FirstName = name.slice(0,name.indexOf(' '));
			that.LastName = name.slice(name.indexOf(' '));
		}
	})(name,that)
}

var Work = function (work) {
	var that = this;
	(function (work,that) {
		switch(work){
			case 'code':
				that.work = '工程师';
				that.workDescript = '每天沉醉于编程';
			default:
				that.work = work;
				that.workDescript = '对不起，我们还不清楚您所选择职位的相关描述';
			}
	})(work,that)
}

Work.prototype.changeWork = function (work) {
	this.work = work;
}

Work.prototype.changeDescript = function (work) {
	this.workDescript = workDescript;
}



var Person = function (name,work) {
	var _person = new Human();
	_person.name = new Named(name);
	_person.work = new Work(work);

	return _person;
}

var person = new Person('xiao ming','code');