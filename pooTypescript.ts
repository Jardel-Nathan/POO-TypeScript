/*
=========================================================
SIMPLE CLASS WITH PROPERTIES
public properties can be accessed from same class, outside and child classes
*/
class User {
    name: string;
    password: string;
    email: string;
}

const client = new User();
client.name = 'Nathan';
client.password = '123';
client.email = 'test@mail.com';



/*
=========================================================
CLASS WITH CONSTRUCTOR
constructor is a special method that is called when a new object is created
*/
class UserWithConstructor {
    name: string;
    password: string;
    email: string;
    // in typescript, you can use the 'this' keyword to access the properties of the class
    constructor(name: string, password: string, email: string) {
        this.name = name;
        this.password = password;
        this.email = email;
    }

}

const client1 = new UserWithConstructor('Nathan', '123', 'test@mail.com');



/*
=========================================================
CLASS WITH METHODS
methods are functions that are part of a class
*/
class UserWithMethods {
    name: string;
    password: string;
    email: string;

    constructor(name: string, password: string, email: string) {
        // Object.assign is a method that copies the properties of one object to another
        Object.assign(this, { name, password, email });
    }

    logInfo() {
        console.log(`Name: ${this.name} - Email: ${this.email}`);
    }
}

const client2 = new UserWithMethods('Nathan', '123', 'test@mail.com');



/*
=========================================================
CLASS WITH PRIVATE PROPERTIES
private properties can only be accessed from inside the class
*/
class UserWithPrivateProperties {
    private name: string;
    private password: string;
    private email: string;

    constructor(name: string, password: string, email: string) {
        Object.assign(this, { name, password, email });
    }

    logInfo() {
        // public methods can access private properties
        console.log(`Name: ${this.name} - Email: ${this.email}`);
    }

}

const client3 = new UserWithPrivateProperties('Nathan', '123', 'test@mail.com');
// client3.name = 'Jardel'; // property is private, so we can't access it from outside the class



/*
=========================================================
CLASS WITH READONLY PROPERTIES
properties readonly can't be changed from outside the class
*/
class UserWithReadonlyProperties {
    readonly name: string;
    readonly password: string;
    readonly email: string;
    constructor(name: string, password: string, email: string) {
        Object.assign(this, { name, password, email });
    }

    setName(name: string) {
        // this.name = name; // we can't change it, even if we are in the same class 
    }

}

const client4 = new UserWithReadonlyProperties('Nathan', '123', 'test@mail.com');
// client4.name = 'Jardel'; // we can't change the value of the readonly property



/*
=========================================================
CLASS WITH PROTECTED PROPERTIES
protected properties can only be accessed from inside the class and child classes
*/
class UserWithProtectedProperties {
    protected name: string;
    protected password: string;
    protected email: string;
    constructor(name: string, password: string, email: string) {
        Object.assign(this, { name, password, email });
    }

    logInfo() {
        // public methods can access protected properties
        console.log(`Name: ${this.name} - Email: ${this.email}`);
    }

}

const client5 = new UserWithProtectedProperties('Nathan', '123', 'test@mail.com');
// const nameUser = client5.name; // we can access the protected property from the same class



/*
=========================================================
CLASS WITH STATIC PROPERTIES
static properties can be accessed from the class, but not from the instances
*/
class UserWithStatic {
    // static properties are shared by all instances of the class
    static nameUser: string;
    static password: string;
    static email: string;
}
// Static properties are accessible without creating an instance of the class
UserWithStatic.nameUser = 'Nathan';
UserWithStatic.password = '123';
UserWithStatic.email = 'test@mail.com';



/*
=========================================================
CLASS WITH STATIC METHODS
static methods can be accessed from the class, but not from the instances
*/
class UserWithStaticMethods {
    static nameUser: string;
    static password: string;
    static email: string;
    // Static methods are accessible without creating an instance of the class
    static logInfo() {
        // in typescript you can use this.nameUser instead of UserWithStatic.nameUser
        console.log(`Name: ${this.nameUser} - Email: ${UserWithStaticMethods.email}`);
    }

}

UserWithStaticMethods.nameUser = 'Nathan';
UserWithStaticMethods.password = '123';
UserWithStaticMethods.email = 'test@mail.com';
// Static methods can be called without creating an instance of the class
// UserWithStaticMethods.logInfo();



/*
=========================================================
CLASS ABSTRACT
abstract classes can't be instantiated, but they can be inherited
*/
abstract class UserWithAbstract {
    // abstract classes can have abstract methods
    abstract logInfo(): void;

    displayInfo() {
        console.log('Display info');
    }

}
class UserWithAbstractMethods extends UserWithAbstract {

    name: string;
    password: string;
    email: string;
    constructor(name: string, password: string, email: string) {
        // method super() is used to access the properties of the parent class
        super();
        Object.assign(this, { name, password, email });
    }

    // we need to implement the abstract method in the child class
    logInfo() {
        console.log(`Name: ${this.name} - Email: ${this.email}`);
    }

}

const client6 = new UserWithAbstractMethods('Nathan', '123', 'test@mail.com');
// const abstractClient = new UserWithAbstract() // we can't create an instance of an abstract class


/*
=========================================================
HERITAGE IN TYPESCRIPT
heritage is the ability to inherit properties and methods from one class to another
*/
class UserFather {
    name: string;
    city: string;
    profession: string;
}

class UserChild extends UserFather { // use extends to define inheritance

    childName: string;
    // in constructor we can receive the properties of this class and parent class
    constructor(name: string, city: string, profession: string, childName: string) {
        super();
        Object.assign(this, { name, city, profession, childName });
    }

    whoIsMyFather() {
        console.log(`Name: ${this.name} - Profession: ${this.profession}`);
    }

}

// the properties and methods of the parent class are accessible from the child class
const client7 = new UserChild('Nathan', 'Gotham', 'Lazy Professional', 'Baby Nathan');


/*
=========================================================
USING INTERFACES IN TYPESCRIPT
interfaces are used to define the properties and methods of a class
*/
interface UserInterface {
    name: string;
    password: string;
    email: string;
    age?: number; // optional property
    logInfo(): void;
}

class UserWithInterface implements UserInterface {
    name: string;
    password: string;
    email: string;
    logInfo() {
        console.log(`Name: ${this.name} - Email: ${this.email}`);
    }
}


/*
=========================================================
GENERICS IN TYPESCRIPT
generics are used to define the properties and methods of a class
*/
class UserWithGenerics<T> {
    name: T; // T is a generic type, it can be any type defined by the caller
    password: T;
    email: T;
    logInfo() {
        console.log(`Name: ${this.name} - Email: ${this.email}`);
    }
}
const   client8 = new UserWithGenerics<string>(); // we can pass any type to the generic type


/*
=========================================================
SINGLETON PATTERN IN TYPESCRIPT
singleton pattern is used to create a single instance of a class
*/
class Singleton {
    private static instance: Singleton;

    public name: string;

    private constructor(name?:string) {
        this.name = name
     }

    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

const singleton1 = Singleton.getInstance();
singleton1.name = 'Nathan';

const singleton2 = Singleton.getInstance();
//console.log(singleton2.name); // we get the name property of the singleton1 instance