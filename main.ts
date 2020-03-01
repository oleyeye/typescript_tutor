export { }
//hello world
let message = 'hello world';
console.log(message);

//primitive types
let isBeginner: boolean = true;
let total: number = 0;
let nameOfTypeScript: string = 'typescript';
let sentence: string = `I'm ${nameOfTypeScript}, I'm a new beginner`;

console.log(sentence);

//null and undefined
let n: null = null;
let u: undefined = undefined;

//null and undefined is subtype of primitive types
let isNew: boolean = n;
let myName: string = undefined;

//array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//tuple
let person1: [string, number] = ['name', 1];

//enum
enum Color { Green, Blue };

let c: Color = Color.Blue;
console.log(c);

//any
let randomValue: any = 0;
randomValue = 'string';
console.log(randomValue);

//unknow, you can't access any functions or constructor to unknow type

let unknowType: unknown = "abc"
//this produce error
//unknowType.toUpperCase();
//this does not
randomValue.toUpperCase();

function hasName(o: any): o is { name: string } {
    if (!!o &&
        typeof o == 'object' &&
        'name' in o) {
        return o;
    }
}

let user: any = { name: 'jjj' };
let user2: any = { name1: 'jjj' };

if (hasName(user)) {
    console.log(user.name);
} else {
    console.log('no name');
}

if (hasName(user2)) {
    console.log(user2.name);
} else {
    console.log('no name');
}

//union types
let theValue: string | number = "test";
theValue = 10

console.log(theValue.toExponential());

//function
function add(left: number, right: number): number {
    return left + right;
}

console.log(add(3, 4));


//optional parameter
function addWithOptionalParam(left: number, right?: number): number {
    if (right) {
        return left + right;
    } else {
        return left;
    }
}

console.log(addWithOptionalParam(10));
console.log(addWithOptionalParam(10, 20));

//default value for paramter
function addWithDefaultValue(left: number, right: number = 999): number {
    return left + right;
}

console.log(addWithDefaultValue(100));
console.log(addWithDefaultValue(100, 324));

//interface
interface Person {
    firstName: string,
    lastName: string
}

function fullName(person: Person): void {
    console.log(`firstName: ${person.firstName}, lastName: ${person.lastName}`);
};

let p = {
    firstName: 'qiang',
    lastName: 'li'
}

fullName(p)

//class and it's access modifier
class Employee {
    //private, protected, public
    public employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet(): void {
        console.log(`Greeting from ${this.employeeName}`);
    }
}

let employee = new Employee('qiang');
employee.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork(){
        console.log(`Delegate my work to ${this.employeeName}`);
    }
}

let manager1 = new Manager("Jenny");
manager1.greet();
manager1.delegateWork();
console.log(manager1.employeeName);