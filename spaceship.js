class SpaceShip {
  //kezdeti property-ket belerakjuk a konstruktorba
  constructor() {
    this.fuel = 400;
    this.passengers = ["John", "Steve", "Sam", "Danielle"];
    this.shields = true;
    this.speedometer = 0;
  }

  //a class metódusai: utasok nevének kilistázása, utas felvétel, utazás
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
    //bemenő paraméterként kapott távolság kiírása konzolra
    console.log("Trying to travel: " + distance);
    //vizsgáljuk van-e üzemanyag
    if (this.fuel === 0) {
      console.log("Can't go further, tank is empty");
    } else {
      // ha van minden utazásnál a távolság felével csökken
      this.fuel -= distance / 2;
      if (this.fuel < 0) {
        //figyelni kell arra az esetre, ha nem elegendő az üzemanyag a paraméterként kapott távolságra
        //ilyenkor csak annyit megyünk, ameddig el nem fogy az üzemanyag
        distance += this.fuel * 2;
        console.log("Can only travel: " + distance);
        this.fuel = 0;
      }
      //ha az üzemanyag 30 alá csökken kikapcsoljuk a pajzsot
      if (this.fuel < 30 && this.fuel > 0) {
        this.shields = false;
        console.log("Fuel is low, turning off shields...");
      }
      //spedometer jelzi, hogy megtett távolság
      this.speedometer += distance;
      console.log("The SpaceShip is at: " + this.speedometer);
      console.log("The SpeceShip has: " + this.fuel + " fuel");
    }
  }
}

let mySpaceShip = new SpaceShip();

mySpaceShip.listPassengers();
mySpaceShip.addPassengers("Lindsay");
mySpaceShip.listPassengers();
mySpaceShip.travel(750);
mySpaceShip.travel(200);
mySpaceShip.travel(100);
