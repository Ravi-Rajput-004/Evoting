const registerrouter = require("./routes/registerroute");
const path=require("path")
const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config()

const _dirname=path.resolve()

const port=process.env.PORT || 8000
const cors = require("cors");
app.use(cors());
app.use(express.json());

 mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
app.listen(port, () => console.log("Server running on port "+port));

app.use("/api", registerrouter);


app.use(express.static(path.join(_dirname,"/frontend/build")))
app.get('*',(req,res)=>{
  res.sendFile(path.resolve(_dirname,"frontend","build","index.html"))
})