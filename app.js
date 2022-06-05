require("dotenv").config();
const express = require("express");
const path = require("path");

const { init } = require("./src/database/mysql.connector");
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/users", require("./src/routes/user.routes"));
app.use("/general", require("./src/routes/general.routes"));
app.use("/deliveries", require("./src/routes/deliveries.routes"));
app.use("/packages", require("./src/routes/packages.routes"));
app.use("/payments", require("./src/routes/payments.routes"));
app.use("/locations", require("./src/routes/locations.routes"));
app.use("/routes", require("./src/routes/routes.routes"));

const PORT = process.env.PORT || 5000;

async function start() {
    try {
        app.listen(PORT, () =>
            console.log(`App has been started on port ${PORT}...`)
        );
        init();
    } catch (e) {
        process.exit(1);
    }
}

start();
