"use server"

import { connectToMongoDB } from "@/database/mongo-config"
import { User } from "@/models/models"




export const fetchTeachers = async ({loggedInUser}) => {

        try {
            await connectToMongoDB()
    
            if (loggedInUser === "Demo") {
                console.log("If block fired++++++++++++++++++++=")
                const usersArray = await User.find({$or: [{name: "Demo1"}, {name: "Demo2"}, {name: "Demo3"}]}).limit(3)
                // return NextResponse.json({metaArray})
                console.log("Logging metaArray from actions.js", usersArray)
            }
    
            // query meta collection
            // const metaArray = await Meta.find({})
            const usersArray = await User.find({ name: { $nin: ["Demo1", "Demo2", "Demo3", "Demo4", "Demo5"] } });
    
            console.log("Loggin usersArray from actions.js=========", usersArray)
            return {success: true, usersArray: JSON.parse(JSON.stringify(usersArray))}
            // return NextResponse.json({metaArray})
    
        } catch (error) {
            console.log("Error getting data from db", error.message)
        }
    
}




