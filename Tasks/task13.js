let user = {
    name: "Bujji",
    age:20,
    printName: function() {
      console.log(this.name);
      console.log(this.age);
    }
  };
  
  user.printName();
  