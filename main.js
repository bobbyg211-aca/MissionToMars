// create 2 classes

// 1 class that represents a vehicle
// the vehicle should have a type property
    // valid types: "plane", "boat", "bus", "train"
// the vehicle should have a property that hold the list of crew on board
// vehicle class should have ready() method that returns true or false
    // if appropriate crewMember is on board

class Vehicle {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.crew = [];
  }
  ready() {
    if (this.crew.length !== 0) {  // return true only if appropriate crew is on board
      return true;
    }
  }
}

// 2 class that represents a crew member

// they should have a name
// they should have a title such as "pilot", "engineer", "captain", "driver"
// they should have vehicle attribute, but calling the baord method should update it ot be the vehicl they are currently in
// should include a method called board(vehicle); 
    // cant be on two vehicles at once

class CrewMember {
  constructor(name, job, vehicle) {
    this.name = name;
    this.job = job;
    this.vehicle = vehicle;
  }
  board(v) {
    if (this.vehicle === undefined) {
      this.vehicle = v.type;
      v.crew.push(this);
    } else {
      console.log(`Already on ${this.vehicle}!`);
    }
  }
}

// Classes usage

const b1 = new Vehicle("B123","bus");
const p1 = new Vehicle("P123","plane");
const john = new CrewMember("John", "Driver");

john.board(b1);
console.log(john);
john.board(p1);
console.log(john);
console.log(b1);

if (b1.ready()) { //return true after board
  console.log("All aboard!")
} else {
  console.log("We need more crew!");
}
