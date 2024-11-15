const mongoose = require("mongoose")

const uri = "mongodb+srv://nguyen040424:O3SB9faYt7f4czzj@project1.hdlrq.mongodb.net/PTDACNTT_library_management";

module.exports.connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("connect successfully")
    } catch (error) {
        console.log("connect fail!")

    }
}