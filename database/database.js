import mongoose, {connect} from "mongoose"


let dbConnected = false

export const connectToStaffDB = async () => {
    mongoose.set("strictQuery", true);


    if(dbConnected) {
        console.log("already connected to database")
        return
    }

    try {
        await connect(process.env.MONGODB_URI)
        dbConnected = true
        console.log("Connection established to dcam_staff collection")
    } catch (error) {
        console.log("Error connecting to mongoDB:", error)
    }
}

