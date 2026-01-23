class Browser {
  //encapsulation using private methods
  launch() {
    console.log("lauching browser");
    this.#checkRam();
    this.#checkVersion();
    this.#checkOSCompatibility();
    this.#checkNewUpdates();
    console.log("chrome browser launched successfully");
  }

  #checkRam() {
    console.log("8GB RAM");
  }

  #checkVersion() {
    console.log("Version 1.1");
  }
  #checkOSCompatibility() {
    console.log("Compatible with Windows and MacOS");
  }
  #checkNewUpdates() {
    console.log("No new updates available");
  }
}

let browser = new Browser();
browser.launch();
//browser.#checkRam();  //private method can not access outside the class
//browser.#checkVersion(); //private method can not access outside the class
//browser.#checkOSCompatibility(); //private method can not access outside the class
//browser.#checkNewUpdates(); //private method can not access outside the class
