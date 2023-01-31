class SpaceShip {
  constructor() {
    this.fuel = 0;
    this.passengers = ["John", "Steve", "Sam", "Danielle"];
    this.shields = true;
    this.speedometer = 0;
  }

  listPassengers() {
    for (let i = 0; i < this.passengers.length; i++) {
      console.log("Passenger " + (i + 1) + ": " + this.passengers[i]);
    }
  }

  addPassengers(newPassenger) {
    this.passengers.push(newPassenger);
    console.log(newPassenger + "was added to the ship.");
  }

  travel(distance) {
    if (this.fuel === 0) {
      console.log("Can't go further, tank is empty");
    } else {
      this.fuel -= distance / 2;
      console.log("the spaceship has: " + this.fuel + "fuel");
    }
  }
}

let mySpaceShip = new SpaceShip();
mySpaceShip.travel(200);
