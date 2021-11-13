class Person {
  constructor(name = "Anonymous", age = 0) {
    // this = individual instance of the class
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // calling the parent class constructor

    // Here we can add additional configuration to the child class
    this.major = major;
  }
  hasMajor() {
    // !!'Computer Science' === true
    // !!'' === false
    // !!undefined === false
    return !!this.major;
  }
  // overriding the parent class getDescription-method
  getDescription() {
    // get the parent class description
    let description = super.getDescription();

    // if the student has a major, add it to the description
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const me = new Traveller("Hussein Mohamed", 25, "Cairo, Egypt");
console.log(me.getGreeting());

const other = new Traveller(undefined, undefined, "Nowhere");
console.log(other.getGreeting());
