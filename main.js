"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//hello world
var message = 'hello world';
console.log(message);
//primitive types
var isBeginner = true;
var total = 0;
var nameOfTypeScript = 'typescript';
var sentence = "I'm " + nameOfTypeScript + ", I'm a new beginner";
console.log(sentence);
//null and undefined
var n = null;
var u = undefined;
//null and undefined is subtype of primitive types
var isNew = n;
var myName = undefined;
//array
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//tuple
var person1 = ['name', 1];
//enum
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Blue"] = 1] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c);
//any
var randomValue = 0;
randomValue = 'string';
console.log(randomValue);
//unknow, you can't access any functions or constructor to unknow type
var unknowType = "abc";
//this produce error
//unknowType.toUpperCase();
//this does not
randomValue.toUpperCase();
function hasName(o) {
    if (!!o &&
        typeof o == 'object' &&
        'name' in o) {
        return o;
    }
}
var user = { name: 'jjj' };
var user2 = { name1: 'jjj' };
if (hasName(user)) {
    console.log(user.name);
}
else {
    console.log('no name');
}
if (hasName(user2)) {
    console.log(user2.name);
}
else {
    console.log('no name');
}
//union types
var theValue = "test";
theValue = 10;
console.log(theValue.toExponential());
//function
function add(left, right) {
    return left + right;
}
console.log(add(3, 4));
//optional parameter
function addWithOptionalParam(left, right) {
    if (right) {
        return left + right;
    }
    else {
        return left;
    }
}
console.log(addWithOptionalParam(10));
console.log(addWithOptionalParam(10, 20));
//default value for paramter
function addWithDefaultValue(left, right) {
    if (right === void 0) { right = 999; }
    return left + right;
}
console.log(addWithDefaultValue(100));
console.log(addWithDefaultValue(100, 324));
function fullName(person) {
    console.log("firstName: " + person.firstName + ", lastName: " + person.lastName);
}
;
var p = {
    firstName: 'qiang',
    lastName: 'li'
};
fullName(p);
//class and it's access modifier
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Greeting from " + this.employeeName);
    };
    return Employee;
}());
var employee = new Employee('qiang');
employee.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Delegate my work to " + this.employeeName);
    };
    return Manager;
}(Employee));
var manager1 = new Manager("Jenny");
manager1.greet();
manager1.delegateWork();
console.log(manager1.employeeName);
