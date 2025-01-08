// Please don't change the pre-written code
// Import the necessary modules here

const fs=require('fs');

const filename="notes.txt";

const Solution = () => {
  // Write your code here

  fs.writeFileSync(filename,"The world has enough coders ");

  let fileBuffer=fs.readFileSync(filename,{
    encoding:"utf-8"
  })

  console.log(fileBuffer);

  //append into file 

  fs.appendFileSync(filename,"BE A CODING NINJA!");

  fileBuffer=fs.readFileSync(filename,{
    encoding:"utf-8"
  });

  console.log(fileBuffer);
};
Solution();

fs.close
module.exports = Solution;
