function employee(name) {
  let device = [];
  switch (name) {
    case "hitesh":
      device.push("A");
      device.push("B");
      device.push("C");
      break;
    case "ronak":
      device.push("D");
      device.push("E");
      break;
    case "dhruvesh":
      device.push("F");
      device.push("G");
      break;
    default:
      console.log("enter valid employee name");
      break;
  }
  return device;
}

let devicelist = employee("hitesh");
console.log(devicelist); //its return array value
