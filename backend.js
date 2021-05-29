const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3001;

const dbURI = require("./dbURI.js").dbURI
router = express.Router();

// Calling all routes middleware.
const productRoutes = require("./routes/productsRoute");

// Connecting to Atlas Database Collection.
mongoose.connect(
    dbURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).
    then((result) => {
        console.log("Successfully connected to MongoDB.");
    })
    .catch((err) => {
        console.log(err);
    });

// Just for functionality and manage to be able to work with body-parsing forms.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/products", productRoutes.router);



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});