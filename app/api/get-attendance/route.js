import { NextResponse } from "next/server";
import { Meta } from "@/models/models";
import { connectToMongoDB } from "@/database/mongo-config";



export const GET = async () => {
    
    try {
        await connectToMongoDB()

        // query meta collection
        const metaArray = await Meta.find({})
        
        return NextResponse.json({metaArray})

    } catch (error) {
        console.log("Error getting data from db")
    }

}