import { NextResponse } from "next/server";
import { Meta } from "@/models/models";
import { connectToStaffDB } from "@/database/database";
connectToStaffDB



export const POST = async (req) => {
    const {name} = await req.json()

    try {
        await connectToStaffDB()
        const metaArray = await Meta.find({})
        
        return NextResponse.json({metaArray})

    } catch (error) {
        console.log("Error getting data from db")
    }

    console.log("Logging name from API:", name)


    return NextResponse.json({message: "success"})

}