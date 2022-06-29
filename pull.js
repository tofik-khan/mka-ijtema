console.log("[Pull Script]: Starting Key Download Process");
const fs = require("fs");
const https = require("https");

// URL of the image
const url = "https://www.api.tofikkhan.com/keys.json";

https.get(url, (res) => {
  console.log("[Pull Script]: Fetching file content");
  // Image will be stored at this path
  const path = `${__dirname}/keys.json`;
  const filePath = fs.createWriteStream(path);
  console.log("[Pull Script]: Creating Local file");
  res.pipe(filePath);
  console.log("[Pull Script]: Copying Remote content to Local file");
  filePath.on("finish", () => {
    filePath.close();
    console.log("[Pull Script]: Process Complete");
  });
});
