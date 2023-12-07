const mongoose = require("mongoose");

(async () => {
    try {
        await mongoose.connect("mongodb+srv://ksainarsimhareddy03:zdlLolJIbOaCJw9R@auction.or9w3vi.mongodb.net/", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();

const db = mongoose.connection;

db.on("open", () => {
    console.log(`Successfully connected to MongoDB`);
});

db.on("error", console.error.bind(console, "Can't connect to MongoDB: "));

module.exports = mongoose;
