require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const db = require("./utils/database");
const app = express();

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// db.sync({ force: !true }).then(() => {
//   Customer.create({
//     name: "test",
//     phone: "1234567890",
//     address: "address here",
//   });
// });

// routes
const customerRouter = require("./routes/customer");
const udhariRouter = require("./routes/udhari");
const productRouter = require("./routes/product");

app.use("/customers", customerRouter);
app.use("/udharis", udhariRouter);
app.use("/products", productRouter);

app.listen(process.env.PORT, () =>
  console.log("Server running on: ", process.env.PORT)
);
