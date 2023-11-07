const express = require("express");
const cors = require("cors");
const { connection } = require("./Config/Connection");
const { MovieRoute } = require("./Routes/Movie.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", MovieRoute);

//listing at Port
app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to Database");
  } catch (err) {
    console.log("Error connecting to Database");
    console.log(err);
  }
  console.log("Listining to port 8080");
});
