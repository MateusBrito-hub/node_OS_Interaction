const http = require("http");
const port = 3000;
const stats = require("./pcRamUsage.js");

http
  .createServer((req, res) => {
    var url = req.url;
    if (url === "/stats") {//write a response
      res.write(`<h1>Stats</h1>`);
      res.write(`<p>OS | ${stats.stats.OS}</p>`);
      res.write(`<p>ARCH | ${stats.stats.Arch}</p>`);
      res.write(`<p>Total RAM | ${stats.stats.TotalRAM}Mb</p>`);
      res.write(`<p>Free RAM | ${stats.stats.FreeRAM}Mb</p>`);
      res.write(`<p> Usage | ${stats.stats.Usage}</p>`);
      res.end();//end the response
    } else {
      res.write("<h1>Working</h1>"); //write a response
      res.end();
    }
  })
  .listen(port, () =>
    console.log(`Server is running in http://localhost:${port}`)
  );
