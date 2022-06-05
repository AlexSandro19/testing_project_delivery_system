const app= require("./app")
const { init } = require("./src/database/mysql.connector");
const PORT = process.env.PORT || 5000;
async function start() {
    try {
        /*app.listen(PORT, () =>
            console.log(`App has been started on port ${PORT}...`)
        );*/
        init();
    } catch (e) {
        process.exit(1);
    }
}

module.exports = app.listen(PORT, () =>
{
console.log(`App has been started on port ${PORT}...`)
start()
}
);