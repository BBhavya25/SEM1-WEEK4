let person = {
    name: "VAMSI",
    age: 20,
    city: "MADNAPALLE",
    introduce: function() {
      console.log(`Hi, I'm ${this.name} from ${this.city}.`);
    }
  };
  
  person.introduce();
  