// create 2 classes

// 1 class that represents a vehicle
// the vehicle should have a type property
    // valid types: "plane", "boat", "bus", "train"
// the vehicle should have a property that hold the list of crew on board
// vehicle class should have ready() method that returns true or false
    // if appropriate crewMember is on board

class Vehicle {
  constructor(name, type, driver) {
    this.name = name;
    this.type = type;
    this.driver = driver;
    this.crew = [];
  }
  ready() {
    let status = false;
    for (let i = 0; i < this.crew.length; i++) {
      if (this.crew[i].job === this.driver) {
        status = true;
        break;
      }
    }
    return status;
  }
}

// 2 class that represents a crew member

// they should have a name
// they should have a title such as "pilot", "engineer", "captain", "driver"
// they should have vehicle attribute, but calling the board method should update it ot be the vehicle they are currently in
// should include a method called board(vehicle); 
    // cant be on two vehicles at once

class CrewMember {
  constructor(name, job) {
    this.name = name;
    this.job = job;
    this.vehicle;
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

const s1 = new Vehicle("S123","ship","captain");
const jack = new CrewMember("Jack", "captain");

console.log(s1);
console.log(jack);

jack.board(s1);

console.log(s1);

if (s1.ready()) { //return true after board
  console.log("All aboard!")
} else {
  console.log("We need the right driver!");
}
