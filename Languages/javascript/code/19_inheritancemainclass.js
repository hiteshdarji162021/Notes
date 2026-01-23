class vehicle {
  speed = 50;
  loading() {
    console.log("vehicle loading");
  }
}

class Car extends vehicle {
  speed = 100;
  start() {
    console.log("car started");
  }
  stop() {
    console.log("car stopped");
  }
  refuel() {
    console.log("car refueled");
  }

  //overridable
  loading() {
    console.log("car loading");
  }

  static billing() {
    console.log("car billing");
  }
}

class BMW extends Car {
  speed = 200;

  //overriding start method
  start() {
    super.start(); //optional call to parent method
    console.log("BMW started with key less");
    console.log(this.speed);
    //console.log(super.speed);  //not work becuase varialble not overridden
  }
  autoPark() {
    console.log("BMW auto park feature");
  }

  static billing() {
    console.log("BMW billing");
  }
}

class cycle {
  testing() {
    console.log("cycle testing");
  }
}

export { Car, BMW };
