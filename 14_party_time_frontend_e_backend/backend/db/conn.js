require("dotenv").config();

const mongoose = require("mongoose");

async function main() {

    try {

        mongoose.set("strictQuery", true);

        await mongoose.connect(process.env.MONGO_URI)

        console.log("Conectado!")

    } catch(error) {

        console.log(error)

    }

}

module.exports = main