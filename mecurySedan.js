//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")
import Vehicle from "./vehicle.js";

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class mercurySedan extends Vehicle {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maxPass = 6;
        this.pass = 0;
        this.wheelNum = 4;
        this.maxSpeed = 200;
        this.fuel = 100;
        this.scheduledService = false;
    }
    loadPassenger(num){
        if(this.pass + num < this.maxPass){
            console.log('There is enough room for passengers.')
        } else {
            console.log('There is no more room for passengers.')
        }
    }
    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }
    scheduleService(mileage){
        if(this.mileage > 30000){
            this.scheduledService = true
            return this.scheduledService
        }
    }
}