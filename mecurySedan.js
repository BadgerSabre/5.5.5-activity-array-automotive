//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class mercurySedan extends Vehicle {
    constructor(maxPass, pass, wheelNum, maxSpeed, fuel, scheduledService){
        this.maxPass = maxPass;
        this.pass = pass;
        this.wheelNum = wheelNum;
        this.maxSpeed = maxSpeed;
        this.fuel = fuel;
        this.scheduledService = scheduledService;
    }
}