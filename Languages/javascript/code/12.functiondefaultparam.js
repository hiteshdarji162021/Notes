function print1(name = "hitesh") {
  console.log("hi", name);
}

print1(); //hi hitesh  - Here if we not pass any value then take default 'hitesh'
print1("gabbar"); //hi gabbar

//2. default param
function sum(a = 0, b = 2) {
  console.log(a + b);
}

sum(); //2
sum(5); //7
sum(5, 4); //9

console.log("===========================");

function openBrowser(browserName = "chrome") {
  switch (browserName.trim().toLowerCase()) {
    case "chrome":
      console.log("chrome browser", browserName);
      break;
    case "firefox":
      console.log("firefox browser", browserName);
      break;
    case "opera":
      console.log("opera browser", browserName);
      break;
    case "edge":
      console.log("edge browser", browserName);
      break;
    default:
      console.log("incorrect browser so by default go with chrome browser");
      break;
  }
}

openBrowser("test");

function runTest(envName = "qa") {
  switch (envName) {
    case "dev":
      console.log("run test in dev environment");
      break;
    case "qa":
      console.log("run test in qa environment");
      break;
    case "prod":
      console.log("run test in prod environment");
      break;
    default:
      console.log("==invalid environment", envName);
      console.log("heance runnin test  on default environment: QA Env");
      break;
  }
}

runTest("stage");
