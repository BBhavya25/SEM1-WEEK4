class Animal {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log(`${this.name} barks.`);
    }
  }
  
  let myDog = new Dog("Buddy", "Dog");
  myDog.speak();
  myDog.bark();
  