function sendEmail1(emailid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Email sent to ${emailid}`);
      resolve();
      return true;
    }, 2000);
  });
}

//1. approch
let status1 = sendEmail1("hitesh@gmail.com");
console.log(status1); // Promise <Pending>  as not write await with send email
console.log("checkout order");