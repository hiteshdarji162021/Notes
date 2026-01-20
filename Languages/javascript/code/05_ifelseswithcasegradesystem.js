// Scenario

// We want to assign grades based on marks:

// Marks Range	Grade
// 90–100	A
// 80–89	B
// 70–79	C
// 60–69	D
// < 60	F


//1. approch which is recommmanded. 
let marks = 85;
let grade;

if (marks >= 90 && marks <= 100) {
  grade = "A";
} else if (marks >= 80 && marks < 90) {
  grade = "B";
} else if (marks >= 70 && marks < 80) {
  grade = "C";
} else if (marks >= 60 && marks < 70) {
  grade = "D";
} else {
  grade = "F";
}

console.log("Grade:", grade);


//2. switch case- not recommanded in this case
//JavaScript switch does NOT support ranges directly. So we use a trick: switch(true)
let marks1 = 85;
let grade1;

switch (true) {
  case (marks1 >= 90 && marks1 <= 100):
    grade1 = "A";
    break;
  case (marks1 >= 80 && marks1 < 90):
    grade1 = "B";
    break;
  case (marks1 >= 70 && marks1 < 80):
    grade1 = "C";
    break;
  case (marks1 >= 60 && marks1 < 70):
    grade1 = "D";
    break;
  default:
    grade1 = "F";
}

console.log("Grade:", grade1);

//Use if–else for ranges and conditions.
//Use switch for fixed, exact values.