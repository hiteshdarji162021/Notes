function launchBrowser(browserName) {
  console.log("browser name is", browserName);
  switch (browserName.trim().toLowerCase()) {
    case "chrome":
      console.log("browser is chrome", browserName);
      return true;
    case "firefox":
      console.log("browser is ff", browserName);
      return true;
    case "edge":
      console.log("browser is edge", browserName);
      return true;
    case "safari":
      console.log("browser is safari", browserName);
      return true;
    default:
      console.log("incorrect browser name");
      return false;
  }
}

let browserLaunched = launchBrowser("safari");
console.log(browserLaunched);

if (browserLaunched) {
  console.log("url open");
}
