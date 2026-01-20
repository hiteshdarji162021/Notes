// diff between console.log and process.stdout.write

console.log("hitesh"); //hitesh
console.log("darji"); //darji

//not newline create
process.stdout.write("gabbar");
process.stdout.write("is");
process.stdout.write("back"); //one line output gabbarisback

//create new line
process.stdout.write("gabbar \n");
process.stdout.write("is" + "\n");
process.stdout.write("back" + "\n");
process.stdout.write(10); //error not allow number. only allow string

//convert number to string in differnt way

//1.
process.stdout.write(10 + ""); //10

//2.
process.stdout.write((10).toString()); //10
//3.
process.stdout.write(String(10)); //10

//4.
process.stdout.write("10"); //10
