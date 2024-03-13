const fs = require("fs");
const newdata = "Write new text";

fs.readFile("text.txt", (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    fs.writeFile("text.txt", data + " " + newdata, (err, data) => {
      if (err) console.log(err.message);
      console.log("write successfully");
    });
  }
});
