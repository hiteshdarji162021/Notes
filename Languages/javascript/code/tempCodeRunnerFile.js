let isloggedin = false;
isloggedin ? showDashboard() : showLoginPage();

function showDashboard() {
  console.log("User is logged in, showing dashboard");
}

function showLoginPage() {
  console.log("User is not logged in, showing login page");
}